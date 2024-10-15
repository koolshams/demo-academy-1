const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class GradesDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const grades = await db.grades.create(
      {
        id: data.id || undefined,

        value: data.value || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await grades.setStudent(data.student || null, {
      transaction,
    });

    await grades.setCourse(data.course || null, {
      transaction,
    });

    await grades.setOrganization(currentUser.organization.id || null, {
      transaction,
    });

    return grades;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const gradesData = data.map((item, index) => ({
      id: item.id || undefined,

      value: item.value || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const grades = await db.grades.bulkCreate(gradesData, { transaction });

    // For each item created, replace relation files

    return grades;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;
    const globalAccess = currentUser.app_role?.globalAccess;

    const grades = await db.grades.findByPk(id, {}, { transaction });

    await grades.update(
      {
        value: data.value || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await grades.setStudent(data.student || null, {
      transaction,
    });

    await grades.setCourse(data.course || null, {
      transaction,
    });

    await grades.setOrganization(
      (globalAccess ? data.organization : currentUser.organization.id) || null,
      {
        transaction,
      },
    );

    return grades;
  }

  static async deleteByIds(ids, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const grades = await db.grades.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
      transaction,
    });

    await db.sequelize.transaction(async (transaction) => {
      for (const record of grades) {
        await record.update({ deletedBy: currentUser.id }, { transaction });
      }
      for (const record of grades) {
        await record.destroy({ transaction });
      }
    });

    return grades;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const grades = await db.grades.findByPk(id, options);

    await grades.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await grades.destroy({
      transaction,
    });

    return grades;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const grades = await db.grades.findOne({ where }, { transaction });

    if (!grades) {
      return grades;
    }

    const output = grades.get({ plain: true });

    output.student = await grades.getStudent({
      transaction,
    });

    output.course = await grades.getCourse({
      transaction,
    });

    output.organization = await grades.getOrganization({
      transaction,
    });

    return output;
  }

  static async findAll(filter, globalAccess, options) {
    const limit = filter.limit || 0;
    let offset = 0;
    const currentPage = +filter.page;

    offset = currentPage * limit;

    const orderBy = null;

    const transaction = (options && options.transaction) || undefined;
    let where = {};
    let include = [
      {
        model: db.users,
        as: 'student',
      },

      {
        model: db.courses,
        as: 'course',
      },

      {
        model: db.organizations,
        as: 'organization',
      },
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.valueRange) {
        const [start, end] = filter.valueRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            value: {
              ...where.value,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            value: {
              ...where.value,
              [Op.lte]: end,
            },
          };
        }
      }

      if (
        filter.active === true ||
        filter.active === 'true' ||
        filter.active === false ||
        filter.active === 'false'
      ) {
        where = {
          ...where,
          active: filter.active === true || filter.active === 'true',
        };
      }

      if (filter.student) {
        const listItems = filter.student.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          studentId: { [Op.or]: listItems },
        };
      }

      if (filter.course) {
        const listItems = filter.course.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          courseId: { [Op.or]: listItems },
        };
      }

      if (filter.organization) {
        const listItems = filter.organization.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          organizationId: { [Op.or]: listItems },
        };
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.lte]: end,
            },
          };
        }
      }
    }

    let { rows, count } = options?.countOnly
      ? {
          rows: [],
          count: await db.grades.count({
            where: globalAccess ? {} : where,
            include,
            distinct: true,
            limit: limit ? Number(limit) : undefined,
            offset: offset ? Number(offset) : undefined,
            order:
              filter.field && filter.sort
                ? [[filter.field, filter.sort]]
                : [['createdAt', 'desc']],
            transaction,
          }),
        }
      : await db.grades.findAndCountAll({
          where: globalAccess ? {} : where,
          include,
          distinct: true,
          limit: limit ? Number(limit) : undefined,
          offset: offset ? Number(offset) : undefined,
          order:
            filter.field && filter.sort
              ? [[filter.field, filter.sort]]
              : [['createdAt', 'desc']],
          transaction,
        });

    //    rows = await this._fillWithRelationsAndFilesForRows(
    //      rows,
    //      options,
    //    );

    return { rows, count };
  }

  static async findAllAutocomplete(query, limit, globalAccess, organizationId) {
    let where = {};

    if (!globalAccess && organizationId) {
      where.organizationId = organizationId;
    }

    if (query) {
      where = {
        [Op.or]: [
          { ['id']: Utils.uuid(query) },
          Utils.ilike('grades', 'value', query),
        ],
      };
    }

    const records = await db.grades.findAll({
      attributes: ['id', 'value'],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['value', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.value,
    }));
  }
};

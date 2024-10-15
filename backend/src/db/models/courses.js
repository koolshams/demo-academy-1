const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const courses = sequelize.define(
    'courses',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      title: {
        type: DataTypes.TEXT,
      },

      description: {
        type: DataTypes.TEXT,
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  courses.associate = (db) => {
    db.courses.belongsToMany(db.users, {
      as: 'students',
      foreignKey: {
        name: 'courses_studentsId',
      },
      constraints: false,
      through: 'coursesStudentsUsers',
    });

    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.courses.hasMany(db.grades, {
      as: 'grades_course',
      foreignKey: {
        name: 'courseId',
      },
      constraints: false,
    });

    //end loop

    db.courses.belongsTo(db.organizations, {
      as: 'organization',
      foreignKey: {
        name: 'organizationId',
      },
      constraints: false,
    });

    db.courses.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.courses.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return courses;
};

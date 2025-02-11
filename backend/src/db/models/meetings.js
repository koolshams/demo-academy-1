const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const meetings = sequelize.define(
    'meetings',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      start_time: {
        type: DataTypes.DATE,
      },

      end_time: {
        type: DataTypes.DATE,
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

  meetings.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.meetings.belongsTo(db.users, {
      as: 'counselor',
      foreignKey: {
        name: 'counselorId',
      },
      constraints: false,
    });

    db.meetings.belongsTo(db.users, {
      as: 'student',
      foreignKey: {
        name: 'studentId',
      },
      constraints: false,
    });

    db.meetings.belongsTo(db.organizations, {
      as: 'organization',
      foreignKey: {
        name: 'organizationId',
      },
      constraints: false,
    });

    db.meetings.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.meetings.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return meetings;
};

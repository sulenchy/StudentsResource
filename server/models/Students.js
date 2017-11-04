module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define('students', {
    regNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    othername: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Students.associate = (models) => {
    Students.belongsTo(models.Departments, {
      foreignKey: 'departmentId',
      onDelete: 'CASCADE',
    });
  };

  return Students;
};

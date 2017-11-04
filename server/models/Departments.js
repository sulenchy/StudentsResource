module.exports = (sequelize, DataTypes) => {
  const Departments = sequelize.define('Departments', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Departments.associate = (models) => {
    Departments.hasMany(models.Students, {
      foreignKey: 'departmentId',
      as: 'Departments',
    });
  };

  return Users;
};


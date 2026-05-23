const { DataTypes } = require("sequelize");

const sequelize = require("../utils/db-connection");

const Departments = require("./departments");

const Students = sequelize.define("Students", {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

});

Departments.hasMany(Students);

Students.belongsTo(Departments);


module.exports = Students;
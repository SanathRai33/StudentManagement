const { DataTypes } = require("sequelize");

const sequelize = require("../utils/db-connection");

const Departments = sequelize.define("Departments", {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  departmentName: {
    type: DataTypes.STRING,
    allowNull: false
  }

});

module.exports = Departments;
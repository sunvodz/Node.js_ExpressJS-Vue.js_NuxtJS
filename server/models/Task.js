const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "task",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    task_title: {
      type: Sequelize.STRING
    },
    task_detail: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);

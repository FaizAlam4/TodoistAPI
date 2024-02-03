import dbConfig from "../config/db.config.js";
import { Sequelize } from "sequelize";
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

import projectModel from "./project.model.js";
import taskModel from "./task.model.js";
db.projects = projectModel(sequelize, Sequelize);
db.tasks = taskModel(sequelize, Sequelize);

db.projects.hasMany(db.tasks, {
  foreignKey: "project_id",
  onDelete: "CASCADE",
});
db.tasks.belongsTo(db.projects);

export default db;

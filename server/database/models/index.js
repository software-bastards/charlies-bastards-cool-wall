const envVars = require("../configs/db.config");

const Sequelize = require("sequelize");

const connector = new Sequelize(envVars.name, envVars.user, envVars.password, {
  host: envVars.host,
  dialect: envVars.dialect,
});

const authenticate = async (connector) => {
  try {
    await connector.authenticate();
    console.log(`Connection to db was good`);
  } catch (e) {
    console.error(`Something went wrong when connnecting to db: ${e}`);
  }
};

authenticate(connector);

const db = {};

db.Sequelize = Sequelize;
db.connector = connector;
db.tech_list = require("./tech_list.model")(Sequelize, connector);
db.vote_table = require("./vote_table.model")(Sequelize, connector);

db.tech_list.hasMany(db.vote_table, {
  as: "vote_table",
});
db.vote_table.belongsTo(db.tech_list, {
  as: "tech_list",
  foreignKey: "tech_id",
});

module.exports = db;

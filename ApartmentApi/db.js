const Sequelize = require("sequelize");

const apartmentModel = require("./models/apartments");

const sequelize = new Sequelize("L6WDSabvqx", "L6WDSabvqx", "EeuIehqDIW", {
  host: "remotemysql.com",
  dialect: "mysql",
});

const Apartment = apartmentModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("tablas sincronizadas");
});
module.exports = {
  Apartment,
};

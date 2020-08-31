const express = require("express");
const bodyParser = require("body-parser");

const apiRouter = require("./routes/api");
const app = express();
require("./db");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//peticiones de api
app.use("/api", apiRouter);
//llamado
app.listen(3001, () => {
  console.log("servidor arrancando!");
});

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./app/models/index.js";
import router from "./app/routes/project.routes.js";
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db..");
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/rest/v2/projects", router);

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Authenticated db...");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

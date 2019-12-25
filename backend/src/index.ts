import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import { topics } from "./data";

dotenv.config();

const PORT = process.env.SERVER_PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/topics", (req, res) => {
  res.send(topics);
});

app.post("/topics", (req, res) => {
  // tslint:disable-next-line:no-console
  console.log(req.body);
  topics.push(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at port: ${PORT}`);
});

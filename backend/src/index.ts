import dotenv from "dotenv";
import express from "express";

dotenv.config();

const PORT = process.env.SERVER_PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at port: ${PORT}`);
});

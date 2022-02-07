import express, { Application, Request, Response } from "express";
import routes from "./routes";

const PORT: number = 5000;

const app: Application = express();

app.use("/", routes);

app.listen(PORT, () =>
  console.log(
    "\x1b[32m",
    `======================= Server start on port : ${PORT} =======================`,
    "\x1b[0m"
  )
);

import express from "express";
const mainRouter = require("./routes/index");
const app = express();

app.use("/api/v1", mainRouter);

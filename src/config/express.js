import userRouter from "#Routes/user.routes.js";
import e from "express";
import express from "express";

const expressApp = express()

// to do middelwares
expressApp.use(express.json());

//RUTAS
expressApp.use("/user", userRouter);

export default expressApp;
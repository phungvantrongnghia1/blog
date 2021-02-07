import express from "express";
import "reflect-metadata";

import { createExpressServer, useExpressServer } from "routing-controllers";
import {UserController} from "./controllers/UserController";
const app = express();

useExpressServer(app,{
    controllers: [UserController]
})

app.listen(3333,() => {
    console.log("Server is running at port 3333!");
})
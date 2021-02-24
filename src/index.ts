import express from "express";
import "reflect-metadata";
import { useExpressServer } from "routing-controllers";
import {UserController} from "./controllers/UserController";
import { bootstrapRouter } from "./middlewares/bootstrapRouter";
import bodyParser from "body-parser";
import { PostController } from "./controllers/PostController";
const app = express();
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const Appconfig = bootstrapRouter(app);
useExpressServer(Appconfig,{
    controllers: [PostController],
})
Appconfig.listen(3500,() => {
    console.log("Server is running at port 3500!");
})
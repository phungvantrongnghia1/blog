import express from "express";
import "reflect-metadata";
import { useExpressServer } from "routing-controllers";
import { UserController } from "./controllers/UserController";
import { BootstrapRouter } from "./middlewares/BootstrapRouter";
import bodyParser from "body-parser";
import { PostController } from "./controllers/PostController";
import { bootstrapAuth } from "./middlewares/bootstrapAuth";
import { ErrorFormatterMiddleware } from "./middlewares/ErrorFormatterMiddleware";
const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
bootstrapAuth(app);

useExpressServer(app, {
  controllers: [UserController, PostController],
  middlewares: [ErrorFormatterMiddleware, BootstrapRouter],
  defaultErrorHandler: false,
});
app.listen(3500, () => {
  console.log("Server is running at port 3500!");
});

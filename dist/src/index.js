"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const UserController_1 = require("./controllers/UserController");
const BootstrapRouter_1 = require("./middlewares/BootstrapRouter");
const body_parser_1 = __importDefault(require("body-parser"));
const PostController_1 = require("./controllers/PostController");
const bootstrapAuth_1 = require("./middlewares/bootstrapAuth");
const ErrorFormatterMiddleware_1 = require("./middlewares/ErrorFormatterMiddleware");
const app = express_1.default();
app.use(body_parser_1.default.json()); // for parsing application/json
app.use(body_parser_1.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
bootstrapAuth_1.bootstrapAuth(app);
routing_controllers_1.useExpressServer(app, {
    controllers: [UserController_1.UserController, PostController_1.PostController],
    middlewares: [ErrorFormatterMiddleware_1.ErrorFormatterMiddleware, BootstrapRouter_1.BootstrapRouter],
    defaultErrorHandler: false,
});
app.listen(3500, () => {
    console.log("Server is running at port 3500!");
});
//# sourceMappingURL=index.js.map
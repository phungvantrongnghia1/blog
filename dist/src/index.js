"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const UserController_1 = require("./controllers/UserController");
const bootstrapRouter_1 = require("./middlewares/bootstrapRouter");
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
app.use(body_parser_1.default.json()); // for parsing application/json
app.use(body_parser_1.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
const Appconfig = bootstrapRouter_1.bootstrapRouter(app);
routing_controllers_1.useExpressServer(Appconfig, {
    controllers: [UserController_1.UserController],
});
Appconfig.listen(3500, () => {
    console.log("Server is running at port 3500!");
});
//# sourceMappingURL=index.js.map
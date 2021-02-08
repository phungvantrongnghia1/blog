"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const UserController_1 = require("./controllers/UserController");
const app = express_1.default();
routing_controllers_1.useExpressServer(app, {
    controllers: [UserController_1.UserController]
});
app.listen(3333, () => {
    console.log("Server is running at port 3333!");
});
//# sourceMappingURL=index.js.map
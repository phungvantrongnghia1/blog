"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knexClient = void 0;
const config = require('./knexfile')["development"];
exports.knexClient = require('knex')(config);
//# sourceMappingURL=knex.js.map
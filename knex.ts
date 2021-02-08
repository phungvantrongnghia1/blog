import Knex from "knex";

const config = require('./knexfile')["development"];
export const knexClient: Knex = require('knex')(config);
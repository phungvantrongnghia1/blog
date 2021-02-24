"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    await knex.schema.createTable("User", (table) => {
        table.increments("id").primary();
        table.string("email").unique();
        table.string("hashPassword");
        table.string("firstName");
        table.string("lastName");
        table.string("fullName");
        table.boolean("isCurator");
    });
    await knex.schema.createTable("Categories", (t) => {
        t.increments("id").primary();
        t.string("title").notNullable();
        t.string("description");
    });
    await knex.schema.createTable("Post", (t) => {
        t.increments("id").primary();
        t.string("content");
        t.string("image");
        t.integer("auth", 11).unsigned().references("id").inTable("User");
        t.integer("categories", 11)
            .unsigned()
            .references("id")
            .inTable("Categories");
        t.timestamp("created_at").defaultTo(knex.fn.now());
        t.timestamp("updated_at").defaultTo(knex.fn.now());
    });
    await knex.schema.createTable("Like", (t) => {
        t.increments("id").primary();
        t.integer("post", 11).unsigned().references("id").inTable("Post");
        t.integer("user", 11).unsigned().references("id").inTable("User");
    });
    await knex.schema.createTable("DisLike", (t) => {
        t.increments("id").primary();
        t.integer("post", 11).unsigned().references("id").inTable("Post");
        t.integer("user", 11).unsigned().references("id").inTable("User");
    });
}
exports.up = up;
async function down(knex) {
    knex.schema.dropTable("User");
    knex.schema.dropTable("Categories");
    knex.schema.dropTable("Post");
    knex.schema.dropTable("Starred");
}
exports.down = down;
//# sourceMappingURL=20210207224548_User.js.map
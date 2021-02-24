import Knex from "knex";

export async function up(knex: Knex): Promise<void> {
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
    t.integer("auth",11).unsigned().references("id").inTable("User");
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

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("User");
  knex.schema.dropTable("Categories");
  knex.schema.dropTable("Post");
  knex.schema.dropTable("Starred");
}

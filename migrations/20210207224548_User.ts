import Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("User",table => {
            table.increments("id").primary()
            table.string("email").unique()
            table.string("hashPassword")
            table.string("firstName")
            table.string("lastName")
            table.string("fullName")
            table.boolean("isCurator")
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("User");
}


import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("cars", (table: Knex.TableBuilder) => {
        table.increments('id').primary();
        table.integer('user_id', 10).notNullable().references('id').inTable("users").onDelete("Cascade");
        table.string('car_name', 255).notNullable();
        table.string('price', 20).notNullable();
        table.boolean('availabillity').notNullable().defaultTo(false);
        table.timestamp('start_rent').notNullable();
        table.timestamp('end_rent').notNullable();
        table.string('img', 100).notNullable();
        table.timestamp('createdAt').notNullable();
        table.timestamp('updatedAt').notNullable();
        table.timestamp('deletedAt').defaultTo(null);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("cars");
}


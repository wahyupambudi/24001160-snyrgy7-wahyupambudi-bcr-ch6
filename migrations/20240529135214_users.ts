import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table: Knex.TableBuilder) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').unique().notNullable();
        table.string('password').notNullable();
        table.string('role').defaultTo('member');
        table.timestamp('createdAt').notNullable()
        table.timestamp('updatedAt').notNullable()
        table.timestamp('deletedAt').defaultTo(null);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}


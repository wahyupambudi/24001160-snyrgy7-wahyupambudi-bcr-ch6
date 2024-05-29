import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { name: "rowValue1", email: "email1@example.com", password: "password1", role: "superadmin", createdAt: knex.fn.now(), updatedAt: knex.fn.now() },
        { name: "rowValue2", email: "email2@example.com", password: "password2", role: "admin", createdAt: knex.fn.now(), updatedAt: knex.fn.now() },
        { name: "rowValue3", email: "email3@example.com", password: "password3", role: "member", createdAt: knex.fn.now(), updatedAt: knex.fn.now() },
    ]);
};

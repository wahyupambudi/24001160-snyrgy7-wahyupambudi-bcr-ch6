import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { name: "superadmin", email: "superadmin@mail.com", password: "password1", role: "superadmin", createdAt: knex.fn.now(), updatedAt: knex.fn.now() },
        { name: "admin", email: "admin@mail.com", password: "password2", role: "admin", createdAt: knex.fn.now(), updatedAt: knex.fn.now() },
        { name: "member", email: "member@mail.com", password: "password3", role: "member", createdAt: knex.fn.now(), updatedAt: knex.fn.now() },
    ]);
};

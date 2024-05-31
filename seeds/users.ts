import { Knex } from "knex";
import { hashPassword } from "../app/utils/authUser";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // set password for users when seeder
    const passSuperAdmin = await hashPassword("superadmin");
    const passAdmin = await hashPassword("admin");
    const passMember = await hashPassword("member")

    // Inserts seed entries
    await knex("users").insert([
        { name: "superadmin", email: "superadmin@mail.com", password: passSuperAdmin, role: "superadmin", createdAt: knex.fn.now(), updatedAt: knex.fn.now() },
        { name: "admin", email: "admin@mail.com", password: passAdmin, role: "admin", createdAt: knex.fn.now(), updatedAt: knex.fn.now() },
        { name: "member", email: "member@mail.com", password: passMember, role: "member", createdAt: knex.fn.now(), updatedAt: knex.fn.now() },
    ]);
};

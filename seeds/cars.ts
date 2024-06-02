import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("cars").del();

    // Inserts seed entries
    await knex("cars").insert([
        { user_id: 1, car_name: "Toyota Camry", price: 20000, availabillity: true, start_rent: knex.fn.now(), end_rent: knex.fn.now(), img: "camry.jpg", created_At: knex.fn.now(), updated_At: knex.fn.now(), deleted_At: null },
        { user_id: 2, car_name: "Honda Civic", price: 15000, availabillity: false, start_rent: knex.fn.now(), end_rent: knex.fn.now(), img: "civic.jpg", created_At: knex.fn.now(), updated_At: knex.fn.now(), deleted_At: null },
        { user_id: 3, car_name: "Tesla Model S", price: 50000, availabillity: true, start_rent: knex.fn.now(), end_rent: knex.fn.now(), img: "model_s.jpg", created_At: knex.fn.now(), updated_At: knex.fn.now(), deleted_At: null }
    ]);
};

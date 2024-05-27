import express, { Express } from 'express';
import dotenv from "dotenv";
import knex from "knex";
import {Model} from "objection";


// call function dotenv;
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

const knexInstance = knex({
    client: "pg",
    connection: {
        database: process.env.DATABASE,
        user: process.env.USER,
        password: process.env.PASSWORD,
        port: 5432
    }
})

Model.knex(knexInstance);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Rest API Binar Car Rental"
    })
})

app.listen(port, () => {
    console.log(`API is running on port ${port}`)
})
import express, { Express } from 'express';
import dotenv from "dotenv";
import knex from "knex";
import {Model} from "objection";
import userRouter from "../app/routes/users.route";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

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

app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Rest API Binar Car Rental"
    })
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
  })
  

export default app;
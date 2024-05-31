import { Model, ModelObject } from "objection";

export class CarsModel extends Model {
    id!: number;
    user_id!: number;
    car_name!: string;
    price!: string;
    availabillity!: boolean;
    start_rent!: Date;
    end_rent!: Date;
    img!: string;
    createdAt!: Date;
    updatedAt!: Date;
    deletedAt!: Date | null;

    static get tableName() {
        return 'cars';
    }
}

export type User = ModelObject<CarsModel>;
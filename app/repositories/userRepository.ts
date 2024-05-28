const { UsersModel } = require("../models/UsersModel");

export const findAll = () => {
    return UsersModel.query();
}

export const findById = (id: number) => {
    return UsersModel.query().findById(id);
}

export const findByEmail = (email: string) => {
    return UsersModel.query().findOne({ email });
}

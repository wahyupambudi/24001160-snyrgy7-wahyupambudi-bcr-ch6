const userRepository = require("../repositories/userRepository");

export const findAll = () => {
    return userRepository.findAll();
}

export const findById = (id: number) => {
    return userRepository.findById(id);
}

export const findByEmail = (email: string) => {
    return userRepository.findByEmail(email);
}
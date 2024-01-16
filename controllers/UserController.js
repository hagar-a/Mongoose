const User = require("../models/User");

const register = async (username, password, firstName) => {
    try {
        const user = await User.create({ username, password, firstName });
        return "User was registered successfully";
    } catch (error) {
        console.log(error);
    }
};

const login = async (username, password) => {
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            return { message: "Logged in successfully", username: username, todos: user.todos };
        } else {
            console.log('error');
        }
    } catch (error) {
        console.log(error);
    }
};

const getAllUsers = async () => {
    try {
        const users = await User.find({}, "firstName");
        return users;
    } catch (error) {
        console.log(error);
    }
};

const deleteUser = async (email) => {
    try {
        await User.deleteOne({ email });
        return "User deleted successfully";
    } catch (error) {
        console.log(error);
    }
};

const editUser = async (email, editValue) => {
    try {
        const user = await User.findOneAndUpdate({ email }, editValue);
        return { message: "Edited successfully", user: user };
    } catch (error) {
        console.log(error);
    }
};

module.exports = { register, login, getAllUsers, deleteUser, editUser };
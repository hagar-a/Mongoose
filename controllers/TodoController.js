const Todo = require('../models/Todo');

const createTodo = async (username, title, tags) => {
    try {
        const todo = await Todo.create({ username, title, tags });
        return todo;
    } catch (error) {
        console.log(error);
    }
};

const getTodos = async (userid) => {
    try {
        const todos = await Todo.find({ userid });
        return todos;
    } catch (error) {
        console.log(error);
    }
};

const editTodo = async (todoid, editData) => {
    try {
        const todo = await Todo.findOneAndUpdate({ _id: todoid }, editData, { new: true });
        return todo;
    } catch (error) {
        console.log(error);
    }
};

const deleteTodo = async (todoid) => {
    try {
        await Todo.deleteOne({ _id: todoid });
        return "Todo deleted successfully";
    } catch (error) {
        console.log(error);
    }
};

module.exports = { createTodo, getTodos, editTodo, deleteTodo };
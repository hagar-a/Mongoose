const mongoose = require('mongoose');
const User = require('./models/User');
const Todo = require('./models/Todo');

const userController = require("./controllers/UserController");
const todoController = require("./controllers/TodoController");

mongoose.connect('mongodb://127.0.0.1:27017/CRUD')
    .then(() => {
        console.log("Connected to the database");
    })
    .catch(err => {
        console.log(err);
    });

userController.register("hager", "11gogo","hagoora",24);
userController.getAllUsers();
userController.login("hager", "11gogo");

Todo.create({ name: "ahmed", title: "hagooraTodo", status: "valid" })
    .then(data => {
        console.log(data);
    });

User.find()
    .then(data => {
        console.log(data);
    });

todoController.createTodo({
    username: "hager",
    title: "fruit",
    tags: ["shopping", "food"]
})

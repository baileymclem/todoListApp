var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require("mongoose"),
    Task = require("./api/models/todoListModel"); // created model loading here
    // bodyParser = require("body-parser");

    // mongoose instance connection url
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/Tododb");

    app.use(express.urlencoded());
    app.use(express.json()); // parse JSON bodies

    var routes = require("./api/routes/todoListRoutes") // importing route
    routes(app); // register the route

    app.listen(port);

    console.log("todo list RESTful API server started on:" + port);
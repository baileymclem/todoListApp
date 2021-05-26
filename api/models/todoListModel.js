"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TasksSchema = new Schema({
    name: {
        type: String,
        required: "Task Name"
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ["pending", "ongoing", "completed"]
        }],
        default: ["pending"]
    }
});

module.exports = mongoose.model("Tasks", TaskSchema);
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/HabitTracker");

const db = mongoose.connection;

db.on("error", (err) => console.log("error in Mongoose",err));
db.on("open", () => console.log("DB is connected Successfully....!"));

module.exports = db;
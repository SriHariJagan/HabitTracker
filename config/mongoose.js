const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/HabitTracker");

const db = mongoose.connection;

db.on("error", (err) => console.log("error in Mongoose",err));
db.on("open", () => console.log("DB is connected Successfully....!"));

module.exports = db;

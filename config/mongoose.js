const mongoose = require('mongoose');

// Disable strict query mode
mongoose.set('strictQuery', false);

// MongoDB connection URL
const url = "mongodb+srv://sriharijagan333:TtNo9xopOBbtIUni@cluster0.2xscnr7.mongodb.net/HabitTracker";

// to connect to the MongoDB database
const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("DB is connected Successfully...");
    } catch (err) {
        console.error("Error connecting to DB:", err);
    }
}

// for use in other files
module.exports = connectDB;

// to establish the connection
connectDB();

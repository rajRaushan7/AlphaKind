// write a function to connect with db and then export it to use in index.js

const mongoose = require("mongoose");
const mongoURI = 'mongodb://127.0.0.1:27017/alphaKind2';

const connectToMongodb = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("connected to DateBase");
    } catch (error) {
        console.error("Error connecting to db: ", error);
    }
}

module.exports = connectToMongodb;
const mongoose = require("mongoose");
const initdata = require("./data.js");  // REQUIRED DATA
const Note = require("../models/listing.js");  // REQUIRED SCHEMA

main().then(() => {
    console.log("connecting to DataBase");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/biologicalWorld");
};

const initDB = async () => {
    await Note.deleteMany({});
    await Note.insertMany(initdata.data);
    console.log("data was initialized");
};

initDB();
const mongoose = require("mongoose");
const initdata = require("./data.js");  // REQUIRED DATA
const Note = require("../models/listing.js");  // REQUIRED SCHEMA

main().then(() => {
    console.log("connecting to DataBase");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb+srv://raj1618192:vbXX9359EoZN0tbQ@alphakind.j7gp3.mongodb.net/?retryWrites=true&w=majority&appName=alphaKind");
};

const initDB = async () => {
    await Note.deleteMany({});
    await Note.insertMany(initdata.data);
    console.log("data was initialized");
};

initDB();

// userName Mongodb - raj1618192
// password mongodv - vbXX9359EoZN0tbQ
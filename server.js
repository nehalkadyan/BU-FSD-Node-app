const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

// app

const app = express();
// port
const port = process.env.PORT || 4000;

// connect to db
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Db is connected");
}).catch((err) => {
    console.log(err);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
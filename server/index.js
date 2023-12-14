/** @format */

const express = require("express");
const { dbconnect } = require("./config/dbconnect");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbconnect();

app.listen(process.env.PORT, () => {
    console.log("SERVER ALREADY");
});

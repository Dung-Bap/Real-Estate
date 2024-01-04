/** @format */

const express = require('express');
const { dbconnect } = require('./config/dbconnect');
const initRouters = require('./routers');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbconnect();
initRouters(app);

app.listen(process.env.PORT, () => {
    console.log('SERVER ALREADY');
});

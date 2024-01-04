const asyncHandler = require('express-async-handler');
const db = require('../models');
const { haspassword } = require('../utils/helper');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');

const register = asyncHandler(async (req, res) => {
    const { name, phone, password, role } = req.body;
    if (!(name || phone || password || role)) throw new Error('Missing inputs');

    const newUser = await db.User.findOrCreate({
        where: { phone },
        defaults: {
            name,
            phone,
            password: haspassword(password),
            role: role || 'USER',
        },
    });

    console.log(newUser);

    const refreshToken =
        newUser[1] &&
        jwt.sign({ id: newUser[0].dataValues.id, phone: newUser[0].dataValues.phone }, process.env.JWT_SECRECT, {
            expiresIn: '2d',
        });

    return res.status(200).json({
        success: newUser[1] ? true : false,
        message: newUser[1] ? 'Register Successful !' : 'Something went wrong !',
        refreshToken: refreshToken || null,
    });
});

const login = asyncHandler(async (req, res) => {
    const { phone, password } = req.body;
    if (!(phone || password)) throw new Error('Missing inputs');

    const user = await db.User.findOne({ where: { phone }, raw: true });

    const isCorrectPassword = user && bcrypt.compareSync(password, user.password);
    const accessToken =
        isCorrectPassword && jwt.sign({ id: user.id, phone: user.phone }, process.env.JWT_SECRECT, { expiresIn: '2d' });

    return res.status(200).json({
        success: accessToken ? true : false,
        message: accessToken ? 'Login successful !' : 'Incorrect phone or password, please try again !',
        accessToken: accessToken || null,
    });
});

module.exports = { register, login };

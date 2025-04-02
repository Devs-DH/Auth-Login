const bycypt = require('bcryptjs');
const users = require('../models/userModel');

exports.loginService = async(username,password) => {
    const user =  users.find(user => user.username === username);
    if(!user){
        throw new Error ('User not exits');
    }

    const isMatch = await bycypt.compare(password, user.password);
    if(!isMatch){
        throw new Error ('Invalid password');
    }
    return user;
};
const express = require('express');


const getUser =  (req, res) => {
    res.send('this user is valid');
};

module.exports = getUser;
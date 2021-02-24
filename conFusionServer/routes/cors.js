const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['http://localhost:3000', 'https://localhost:3443'];
let corsOptionsDelegate = (req, callback) => {
    var corsOptinos;

    if(whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptinos = {origin: true};
    }
    else{
        corsOptinos = {origin: false};
    }
    callback(null, corsOptinos);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);
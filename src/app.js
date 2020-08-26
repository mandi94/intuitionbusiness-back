const express = require('express')
require('./db/mongoose')
const userModule= require('./router/user')
const questionModule = require('./router/question')

const app= express()

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(userModule)
app.use(questionModule)

module.exports= app


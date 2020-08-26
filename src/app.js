const express = require('express')
require('./db/mongoose')
const userModule= require('./router/user')
const questionModule = require('./router/question')

const app= express()

app.use(express.json())
app.use(userModule)
app.use(questionModule)

module.exports= app


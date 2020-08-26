const express = require('express')
require('./db/mongoose')
const userModule= require('./router/user')
const answeModule = require('./router/answer')
const questionModule = require('./router/question')

const app= express()

app.use(express.json())
app.use(userModule)
app.use(answeModule)
app.use(questionModule)

module.exports= app


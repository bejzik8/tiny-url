const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb+srv://dev:development@cluster0.9x6uu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

app.use(express.json())

app.use('/', require('./routes'))

app.listen(process.env.PORT || 5000)
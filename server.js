const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

//MIDDLEWARE
require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())

//MONGOOSE CONNECTION
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongo on: ', process.env.MONGO_URI)
})

//INDEX PAGE
app.get('/', (req, res) => {
    res.send('Hello World')
})

//BOOKS CONTROLLER
const booksController = require('./controllers/books_controller')
app.use('/books', booksController)

// LISTENING TO PORT 
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
const mongoose = require('mongoose')
const { Schema } = mongoose

//BOOK SCHEMA

const bookSchema = new Schema ({
title: String,
description: String,
year: Number,
quantity: Number,
imageURL: String
})

//EXPORTS
const Book = mongoose.model ('Book', bookSchema)
module.exports = Books
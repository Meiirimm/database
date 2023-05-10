const mongoose = require('mongoose')

const ProffSchema = new mongoose.Schema({
    name: String,
    key: Number,
})

module.exports = mongoose.model('proff' , ProffSchema)
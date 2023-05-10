const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
    name: String,
    key: Number,
})

module.exports = mongoose.model('course' , CourseSchema)
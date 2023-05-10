const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studSchema = new mongoose.Schema({
    image: String,
    full_name: String,
    course: {type: Schema.Types.ObjectId, ref: 'course'},
    proff: {type: Schema.Types.ObjectId, ref: 'proff'},
    email: String,
    address: String,
});
  
module.exports = mongoose.model('stud' , studSchema)
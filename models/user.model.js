
// const { string } = require('joi');
const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    email: {
        type: String, 
        required: true, 
    },
    password: {
        type: String, 
        required: true, 
    },
    createdOn: {
        type: Date, 
        default: Date.now, 
    },
})

module.exports = mongoose.model("users", UsersSchema)
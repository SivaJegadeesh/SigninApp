const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
    name: {
        type : String,
        unique: true,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required:true,

    },
    password: {
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model("Login", loginSchema);
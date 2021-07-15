const mongoose = require('mongoose');
const validator = require('validator');
let regex = /^([0-9]){10}$/;

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        default: '',
    },
    lastname: {
        type: String,
        required: true,
        default: '',
    },
    email: {
        type: String,
        // required: true,
        unique: true,
        default: '',
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!value.match(regex)) {
                throw new Error("Phone number is not validate.")
            }
        },
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        // required: true,
        default: '',
    },
    profile: {
        type: String,
        // required: true,
        default: '',
    },
}, { timestamps: true });

const UserData = new mongoose.model('userdata', userSchema);

module.exports = UserData;
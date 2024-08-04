const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    mobileNo: {
        type: String,
        validate: {
            validator: function(v) {
                return /\d{10}/.test(v);
            },
            message: props => `${props.value} is not a valid 10-digit number!`
        },
        required: [true, 'User mobile number required']
    },
    emailId: {
        type: String,
        validate: {
            validator: function(v) {
                return /\S+@\S+\.\S+/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        },
        required: [true, 'User email required']
    },
    address: {
        street: String,
        city: String,
        state: String,
        country: String
    },
    loginId: {
        type: String,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9]{8}$/.test(v);
            },
            message: props => `${props.value} is not a valid login ID!`
        },
        required: [true, 'User login ID required']
    },
    password: {
        type: String,
        validate: {
            validator: function(v) {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/.test(v);
            },
            message: props => 'Password must be at least 6 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.'
        },
        required: [true, 'User password required']
    },
    creationTime: { type: Date, default: Date.now },
    lastUpdated: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
module.exports = User;

const mongoose = require('mongoose');

const user = new mongoose.Schema ({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    username: {
        type: String
    },
    role: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = User = mongoose.model ( 'user', user, 'users' );
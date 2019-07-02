const jwt = require('jsonwebtoken');
const tokenGenerate = (name) => {
    return jwt.sign({name: name}, 'your-256-bit-secret');
};

module.exports = {
    tokenGenerate,
};
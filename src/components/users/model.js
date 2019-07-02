const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dbName = '/test';

mongoose.connect('mongodb://localhost:27017/' + dbName, { useNewUrlParser:true })
    .then(() => console.log('mongoose connected'))
    .catch(e => console.log("error"));

const Users = mongoose.model('users', new Schema({
    name: {type: String},
    surname: {type: String}
}));

const listUsers = Users.find({}, function (req, res) {
    const usersArr = [];
    res.forEach(elem => {
        usersArr.push(elem)
    });
    return usersArr;
});

const createUser = (name, surname) => {
    new Users({ name: name, surname: surname }).save((err) => {
        return err;
    });
};

const deleteUser = (name, surname) => {
    Users.deleteOne({ name: name, surname: surname }, function (req, res) {
        return res;
    });
};

module.exports = {
    listUsers,
    createUser,
    deleteUser
};
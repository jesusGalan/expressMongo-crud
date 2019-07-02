const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser:true})
    .then(() => console.log('mongoose connected'))
    .catch(e=>console.log("error"));

const Users = mongoose.model('users', new Schema({
    name: {type: String},
    surname: {type: String}
}));

const listUsers = Users.find({}, function (req, res) { // Puta asyncronia
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
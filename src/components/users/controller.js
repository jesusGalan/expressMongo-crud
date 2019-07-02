const db = require('./model');

const deleteUser = (foo, bar) => {
    console.log(db.deleteUser(foo, bar));
};

const listUsers = () => {
    const result = db.listUsers;
    return result;
};

const createUser = (foo, bar) => {
    db.createUser(foo, bar);
};

module.exports = {
    listUsers,
    deleteUser,
    createUser
};
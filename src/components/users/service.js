const controller = require('./controller');

const userLogin = (req, res) => {
    res.status(200).send({message: "Ruta1"})
};

const userValidate = (req, res) => {
    res.status(200).send({ message: 'Ruta2!' });
};

const userCreate = (req, res) => {
    const result = controller.createUser(req.params.name, req.params.surname);
    res.status(201).send(req.params.name + " " + req.params.surname + " saved.");
};

const userDelete = (req, res) => {
    const result = controller.deleteUser(req.params.name, req.params.surname);
    res.status(200).send(result);
};

const userList = (req, res) => {
    const result = controller.listUsers();
    result.then(x => res.status(200).send(x));
}

module.exports = {
    userLogin,
    userValidate,
    userCreate,
    userDelete,
    userList
};
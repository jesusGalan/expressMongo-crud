const controller = require('./controller');

const tokenGenerate = (req, res) => {
    const result = controller.tokenGenerate(req.params.name);
    res.status(200).send(result);
};

module.exports = {
    tokenGenerate,
};
const router = require('express').Router();

router.get('/route1', (req, res) => {
    res.status(200).send({ message: 'Subruta1!' });
});

module.exports = router;
const router = require('express').Router();

const service = require('./service');

router.post('/sign/:name', service.tokenGenerate);

module.exports = router;
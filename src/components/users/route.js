const router = require('express').Router();

router.use('/subrutas', require('./subroute/route'));

const service = require('./service');

router.post('/create/:name/:surname', service.userCreate);

router.delete('/delete/:name/:surname', service.userDelete);

router.get('/list', service.userList);

module.exports = router;
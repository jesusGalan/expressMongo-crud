const router = require('express').Router();
const handlebars = require('handlebars');
const fs = require('fs');

router.get('/route1/:name', function(req, res) {
    const txt = fs.readFileSync('./path/plantilla.txt', 'utf-8');
    const templateTxt = handlebars.compile(txt);
    const result = templateTxt({nombre: req.params.name});
    res.send(result);
})

module.exports = router;
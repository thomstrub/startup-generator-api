var router = require('express').Router();
const apiCtrl = require('../controllers/api');


router.get('/random', apiCtrl.random);

module.exports = router;
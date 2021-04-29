var router = require('express').Router();

router.get('/random', apiCtrl.random);

module.exports = router;
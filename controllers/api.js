module.exports = {
    random
}

const randomGenerator = require('../generator/random')

function random(req, res, next) {
    res.json(randomGenerator.returnJson());
}
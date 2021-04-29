module.exports = {
    random
}

const idea = "Test idea";

function random(req, res, next) {
    res.json({"idea": idea});
}
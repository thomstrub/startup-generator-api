const express = require('express');

const app = express();


// Configure the app - (app.set)

// Middleware

// Routes
app.get('/', function (req, res) {
    res.send('<h1>Get out your checkbooks!</h1>');
})

app.listen(3000, function() {
    console.log('Listening on Port 3000');
});
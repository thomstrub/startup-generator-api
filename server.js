const express = require('express');

const app = express();


// Configure the app - (app.set)

// Middleware

app.use("/public", express.static(__dirname + "/public"));

// Routes
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
})

app.listen(3000, function() {
    console.log('Listening on Port 3000');
});
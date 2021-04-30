const express = require('express');

const app = express();

const apiRoutes = require('./routes/api');

// Configure the app - (app.set)

// Middleware

app.use("/public", express.static(__dirname + "/public"));


// Routes

app.use('/api', apiRoutes);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
})

app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on Port 3000');
});

// invalid request, send 404 page
app.use(function(req, res) {
    res.status(404).send('Cant find that!');
  });
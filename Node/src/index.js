var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.status(200).send('Hello World!');
});

app.get('/test', function (req, res) {
    res.status(500).send({"message": "This is an error response"});
});

let server = app.listen(3000, function () {
    console.log('Example app listening on port ' + server.address().port);
});

module.exports = server;

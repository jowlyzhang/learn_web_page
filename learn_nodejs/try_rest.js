var express = require('express');
var app = express();
var fs = require('fs');

var users = {
    'user4': {
        'name': 'moihit',
        'password': 'password4',
        'profession': 'dudu',
        'id': 4
    }
};

app.get('/deleteUser', function (req, res) {
    fs.readFile(__dirname + '/' + 'users.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        delete data['user' + 2];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});

app.get('/:id', function(req, res) {
    fs.readFile(__dirname + '/' + "users.json", 'utf8', function(err, data) {
        users = JSON.parse(data);
        var user = users['user' + req.params.id];
        console.log(user);
        res.end(JSON.stringify(user));
    });
});

app.get('/addUser', function(req, res) {
    fs.readFile(__dirname + '/' + "users.json", 'utf8', function(err, data) {
        data = JSON.parse(data);
        data['user4'] = users['user4'];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});
app.get('/listusers', function (req, res) {
    fs.readFile(__dirname + "/" + "usrs.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});


var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

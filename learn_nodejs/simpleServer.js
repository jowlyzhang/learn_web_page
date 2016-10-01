var http = require("http");
var express = require("express");

http.createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body as 'Hello, world'
    response.end('Hello World\n');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081')

var Dog = (function() {
    'use strict';

    var count = 0;
    function Dog(name, weight) {
        this.name = name;
        this.weight = weight;
        count += 1;
    };
    // static method
    Dog.breed = function() {
        return 'poodou';
    };
    Dog.prototype.intro = function() {
        return this.name + this.weight;
    };
    Dog.prototype.index = function() {
        return this.name + ' is the ' + count + ' Dog created.';
    };
    return Dog;
})();

console.log(new Dog('dudu', '10').intro());
console.log(new Dog('dingding', '30').intro());

// Dog --> Dog constructor
// new Dog(*args)  --> new Dog_constructor(*args)
// new Dog(*args).intro()  --> new Dog_constructor(*args).intro()
//
// what's the pros of function closures, it has access to  it's outerspace.
// 1. Good use case is counting number of instances created.

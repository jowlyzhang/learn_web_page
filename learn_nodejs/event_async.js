// Events and asynchronous functions.
var events = require('events');

var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
    console.log("Listener1 executed");
};

var listener2 = function listener2() {
    console.log("Listener2 executed");
};

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

var eventListeners = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

eventEmitter.emit('connection');
eventEmitter.removeListener('connection', listener1);
console.log('Listener1 will not listen now');
eventEmitter.emit('connection');

eventListeners = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

var fs = require('fs');

fs.readFile('input.txt', function(err, data) {
    if (err) {
        console.log(err.stack);
        return;
    };
    console.log(data.toString());
});

console.log('Program Ended.');

var EventEmitter = require('events');
var util = require('util');

function Greeter() { //constructor
    this.greeting = 'Hello there';
}

util.inherits(Greeter, EventEmitter); //gives constructor access to all the properties on the EventEmitter object

Greeter.prototype.greet = function() { //constructor that emits event. We rely on emit. Event will be called 'greet'
    console.log(this.greeting);
    this.emit('greet');
};

var greeter = new Greeter();

greeter.on('greet', function() {
    console.log('Someone greeted');
});

greeter.greet();
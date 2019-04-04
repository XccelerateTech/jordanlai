const EventEmitter = require('events');

class Player extends EventEmitter{
    constructor(referee){
        super(); //requires a blank super because I'm creating a constructor that already exists. 'EventEmitter' that is required from 'events'
        this.referee = referee;
    }
    play(input){
        this.referee.emit('playerReady', input);
    }
}

module.exports = Player;
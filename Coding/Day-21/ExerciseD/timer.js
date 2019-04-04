const EventEmitter = require ('events');

class Timer extends EventEmitter {
    constructor(name){
        super();

        this.name=name;
    }

    countDown(seconds){
        let timePassed = 0;
        const interval = setInterval(emitInterval, 1000);
        const that = this;
        function emitInterval(){
            var remaining = seconds - timePassed;
            if (remaining == 0){
                clearInterval(interval);
            }
            that.emit('tick', remaining, that.name);
            timePassed += 1;
        }
    }
}

module.exports = Timer;
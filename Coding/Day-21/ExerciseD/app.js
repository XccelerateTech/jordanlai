var Timer = require('./timer');

const timer = new Timer('Billy');  //const = new function that takes from Timer class 
const timer1 = new Timer('John');
const timer2 = new Timer('Elton')



timer.on('tick', function(remaining, name){
    if(remaining == 0){
        return console.log('kaboom');
    }
    console.log("Time remaining: " +remaining + ' ' + name);
})


timer1.on('tick', function(remaining, name){
    if(remaining == 0){
        return console.log('kaboom');
    }
    console.log("Time remaining: " +remaining + ' ' + name);
})

timer2.on('tick', function(remaining, name){
    if(remaining == 0){
        return console.log('kaboom');
    }
    console.log("Time remaining: " +remaining + ' ' + name);
})

timer.countDown(3);
timer1.countDown(4);
timer2.countDown(5);


const myEmitter = new myEmitter();

myEmitter.once('newListener', (event, listener) => {
    if (event === 'event'){
        myEmitter.on('event', () => {
            console.log('B');
        });
    }
});

myEmitter.on('event', () => {
    console.log('A');
});

myEmitter.emit('event');
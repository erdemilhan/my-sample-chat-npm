
const events = require('events');

const channel = new events.EventEmitter();

channel.on('join', () => {
    console.log('welcome!');
});

channel.emit('join');
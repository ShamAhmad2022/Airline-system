'use strict';

const eventsPool = require('./events');
const manager = require('./manager');
const pilot = require('./pilot');

eventsPool.on('new-flight', newFlightsHandler);

function newFlightsHandler(payload){
    console.log(payload)
    eventsPool.emit('took-off', payload);
    eventsPool.emit('Arrived', payload);
}


'use strict';

const eventsPool = require('./events');
const manager = require('./manager');
const pilot = require('./pilot');

eventsPool.on('new-flight', newFlightsHandler);

function newFlightsHandler(payload){
    console.log(payload)
}

eventsPool.on('took-off', tookOffFlightsHandler);

function tookOffFlightsHandler(payload){
    console.log(payload);
}


eventsPool.on('arrived', arrivedFlightsHandler);

function arrivedFlightsHandler (payload){
    console.log(payload);
}

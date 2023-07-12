'use strict';

const eventsPool = require('./events');

eventsPool.on('took-off', tookOffFlightsHandler);

function tookOffFlightsHandler (payload){

    setInterval(() => {
        console.log(`Pilot: flight with ID ${payload.Flight.Details.flightID} took-off`);
        console.log(payload);
    }, 14000);
}

eventsPool.on('Arrived', arrivedFlightsHandler);

function arrivedFlightsHandler (payload){

    setInterval(() => {
        console.log(`Pilot: flight with ID ${payload.Flight.Details.flightID} has arrived`);
        console.log(payload);
    }, 17000);
}

'use strict';

const eventsPool = require('./events');

eventsPool.on('new-flight', newFlightsHandler);

function newFlightsHandler(payload){
    setTimeout(() => {
        console.log(`Pilot: flight with ID ${payload.Flight.Details.flightID} took-off`);
        payload.Flight.event = 'took-off';
        eventsPool.emit('took-off', payload);
    }, 4000);
}

eventsPool.on('took-off', tookOffFlightsHandler);

function tookOffFlightsHandler(payload){
    setTimeout(() => {
        console.log(`Pilot: flight with ID ${payload.Flight.Details.flightID} has arrived`);
        payload.Flight.event = 'arrived';
        eventsPool.emit('arrived', payload);
    }, 3000);

}

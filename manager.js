'use strict';

const eventsPool = require('./events');

const { v4: uuidv4 } = require('uuid');
const Chance = require('chance');
const chance = new Chance();

setInterval(() => {
    const flightID = uuidv4();

    console.log(`Manager: new flight with ID ${flightID} have been scheduled`);
    const fromManager = {
        Flight : {
        event: 'new-flight',
        time: new Date(),
        Details: {
        airLine: 'Royal Jordanian Airlines',
        flightID: flightID,
        pilot: chance.name(),
        destination: `${chance.country()}, ${chance.country()}`
        }
        }
    };

    eventsPool.emit('new-flight', fromManager);
}, 10000);

eventsPool.on('arrived', arrivedFlightsHandler);

function arrivedFlightsHandler (payload){
    setTimeout(() => {
        console.log(`Manager: we’re greatly thankful for the amazing flight, ${payload.Flight.Details.pilot}`);
    }, 10);
}

'use strict';

require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const Chance = require('chance');
const chance = new Chance();

const port = process.env.PORT || 5000;
const host = `http://localhost:${port}`;

const io = require('socket.io-client');
const socket = io.connect(host);


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

    socket.emit('new-flight', fromManager);
}, 10000);//10000


socket.on('Arrived', arrivedFlightsHandler);

function arrivedFlightsHandler (payload){
    console.log(`Manager: we’re greatly thankful for the amazing flight, ${payload.Flight.Details.pilot}`);
}
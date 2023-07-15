'use strict';

require('dotenv').config();
const port = process.env.PORT || 5000;
const serverhost = `http://localhost:${port}`;
const nameSpacehost = `http://localhost:${port}/airline`;

const io = require('socket.io-client');
const serverSocket = io.connect(serverhost);
const nameSpaceSocket = io.connect(nameSpacehost);


serverSocket.on('new-flight', newFlightsHandler);

function newFlightsHandler(payload){
    setTimeout(() => {
        console.log(`Pilot: flight with ID ${payload.Flight.Details.flightID} took-off`);
        payload.Flight.event = 'took-off';
        nameSpaceSocket.emit('took-off', payload);
    }, 4000);
    
    nameSpaceSocket.on('took-off', tookOffFlightsHandler);
    
    function tookOffFlightsHandler(payload){
        setTimeout(() => {
            console.log(`Pilot: flight with ID ${payload.Flight.Details.flightID} has arrived`);
            payload.Flight.event = 'arrived';
            serverSocket.emit('arrived', payload);
        }, 3000);
    }
}


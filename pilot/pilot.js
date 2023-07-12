'use strict';

require('dotenv').config();
const port = process.env.PORT || 5000;
const serverhost = `http://localhost:${port}`;
const nameSpacehost = `http://localhost:${port}/airline`;

const io = require('socket.io-client');
const serverSocket = io.connect(serverhost);
const nameSpaceSocket = io.connect(nameSpacehost);



serverSocket.on('Arrived', arrivedFlightsHandler);

function arrivedFlightsHandler (payload){
    
    nameSpaceSocket.emit('took-off', payload);
    console.log(`Pilot: flight with ID ${payload.Flight.Details.flightID} took-off`);
    
    serverSocket.emit('Arrived2', payload);
    console.log(`Pilot: flight with ID ${payload.Flight.Details.flightID} has arrived`);
    
}

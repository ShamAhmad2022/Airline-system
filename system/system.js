'use strict';

require('dotenv').config();
const port = process.env.PORT || 5000;

const io = require('socket.io')(port);
const flights = io.of('/flights');
const { v4: uuidv4 } = require('uuid');

const queue={flights:{}};

flights.on('connection', socket => {
  console.log('((flights)) connected with ID of ', socket.id);


  socket.on('new-flight', newFlightsHandler);
  
  function newFlightsHandler(payload){
    console.log(payload)
    flights.emit('new-flight', payload);
    
    let id= uuidv4();
    queue[flights][id] = payload;
    flights.emit('flight', {
      id,
      payload: queue[flights][id]
    });
  }

  socket.on('arrived', arrivedFlightsHandler);

  function arrivedFlightsHandler (payload){
    console.log(payload);
    flights.emit('arrived', payload);
  }
  
  socket.on('get-all', getAllHandler);

  function getAllHandler (){
    Object.keys(queue).forEach(id => {
      flights.emit('flight', {
        id,
        payload: queue[id]
      });
    });
  }

});

const airlineNameSpace = io.of('/airline');

airlineNameSpace.on('connection', socket => {
    console.log('((name space)) connected with ID of ', socket.id);
  
    socket.on('took-off', tookOffFlightsHandler);

    function tookOffFlightsHandler(payload){
        console.log(payload);
        socket.emit('took-off', payload);
    }
});

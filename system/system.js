'use strict';

require('dotenv').config();
const port = process.env.PORT || 5000;

const io = require('socket.io')(port);


io.on('connection', socket => {
  console.log('connected with ID of ', socket.id);

  socket.on('new-flight', newFlightsHandler);
  
  function newFlightsHandler(payload){
      console.log(payload)
      io.emit('Arrived', payload);

      io.on('Arrived2', arrivedFlightsHandler);
      function arrivedFlightsHandler(payload){
          setInterval(() => {
              payload.Flight.event = 'Arrived'
              console.log(payload);
          }, 17000);//17000
      }
   }

});


const airlineNameSpace = io.of('/airline');
airlineNameSpace.on('took-off', tookOffFlightsHandler);

function tookOffFlightsHandler (payload){

    setInterval(() => {
        payload.Flight.event = 'took-off'
        console.log(payload);
    }, 14000);//14000
}

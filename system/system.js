'use strict';

require('dotenv').config();
const port = process.env.PORT || 5000;

const io = require('socket.io')(port);


io.on('connection', socket => {
  console.log('connected with ID of ', socket.id);

//   socket.on('start', () => {

  io.on('new-flight', newFlightsHandler);
  
  function newFlightsHandler(payload){
    console.log(payload)
  }


  socket.on('arrived', arrivedFlightsHandler);

  function arrivedFlightsHandler (payload){
    console.log(payload);
  }
  
// })

});


const airlineNameSpace = io.of('/airline');

airlineNameSpace.on('connection', socket => {
    console.log('((name space)) connected with ID of ', socket.id);
  
    socket.on('took-off', tookOffFlightsHandler);

    function tookOffFlightsHandler(payload){
        console.log(payload);
    }
});

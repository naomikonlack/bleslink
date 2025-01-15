const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',  // Adjust this according to your frontend's domain
    methods: ['GET', 'POST']
  }
});

// Listen for connection from clients
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for messages sent from the frontend
  socket.on('sendMessage', (data) => {
    console.log(`Message received: ${data.message}`);
    
    // Broadcast the message to all users
    io.emit('receiveMessage', data);
  });

  // When the user disconnects
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const PORT = process.env.PORT || 5007;
server.listen(PORT, () => {
  console.log(`Messaging service running on port ${PORT}`);
});

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});

//Below is the code from the tutorial, but it was not working to display chat messages
//on the screen, only the console. The above code is from the GitHub project for this which works.
//Lots of syntax also seems to be different.

/*
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {  
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {  
    console.log('a user connected');
    socket.on('disconnect', () => {    
        console.log('user disconnected');  
    });
    socket.on('chat message', (msg) => {    
        console.log('message: ' + msg);  
    });
});

server.listen(3000, () => {  
    console.log('listening on *:3000');
});
*/

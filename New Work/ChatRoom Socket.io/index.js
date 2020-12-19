const express = require('express');
const socket = require('socket.io');
// Setting Up The App

const app = express();

// Setting Up The Server
const server = app.listen(4000,(req,res)=>{
    console.log('Listening To The Request Made: 4000');
});

// Static Files
app.use(express.static('public'));

// Socket Setup

const io = socket(server);
// Emit Events
io.on('connection', (socket)=>{
    console.log('Socket Connected', socket.id);

    socket.on('chat', (data)=>{
        io.sockets.emit('chat', data);
    })

    socket.on('typing', (data)=>{
        socket.broadcast.emit('typing', data)
    })
});



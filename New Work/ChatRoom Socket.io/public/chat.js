// Make Connection
var socket = io.connect('http://localhost:4000');

// Document Selector
var handle = document.querySelector('#handle'),
    message = document.querySelector('#message'),
    btn = document.querySelector('#send'),
    output = document.querySelector('#output'),
    feedback = document.getElementById('feedback');

// Emit Events
btn.addEventListener('click',()=>{
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    });
})

message.addEventListener('keypress',()=>{
    socket.emit('typing', handle.value);
})

// Listen For Events
socket.on('chat',(data)=>{
    feedback.innerHTML = '';
    output.innerHTML +=
    '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>'
});


socket.on('typing', (data)=>{
    feedback.innerHTML = '<p><em>' + data + 'is typing a goddamn message...' + '<em></p>';
})
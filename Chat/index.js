var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use('/',express.static('Client'));
http.listen(3000,function(){
    console.log("listening on port: 3000");
})
io.on('connection',function(socket){
    console.log("User logged in");

    socket.on('chat message', function(msg){
        console.log('Mensagem: '+msg);
        io.emit('chat message',msg);      
    });

    socket.on('join',function(name){
        console.log(name);
        io.emit('join',name);
    });
    
});


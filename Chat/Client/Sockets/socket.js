$(function(){
    var socket = io();
    $('form').submit(function(){
      socket.emit('chat message',$('#m').val());
      $('#m').val('');
      return false;
    });
    socket.on('chat message',function(msg){
      $('#messages').append($('<li>').text(msg));
    });
    socket.on('join', function(name){
      var date = new Date();
      var time = date.getHours() + ":" + date.getMinutes()
      //$('#messages').append($('<li>').text(name+' entrou..'));
      $('#messages').append($('<div class="container"><p>' + name + '</p><span class="time-right">' + time + '</span></div>'));
      console.log(time);
    });
  })
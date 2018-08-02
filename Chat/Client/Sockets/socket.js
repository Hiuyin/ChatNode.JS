$(function(){
    var socket = io();
    $('form').submit(function(){
      socket.emit('chat message',$('#m').val());
      $('#m').val('');
      return false;
    });
    socket.on('chat message',function(msg){
      var date = new Date();
      var time = date.getHours() + ":" + date.getMinutes()
      //$('#messages').append($('<li>').text(msg));
      $('#messages').append($('<div class="container" style="width:auto"><p>' + msg + '</p><span class="time-right">' + time + '</span></div>'));
    });
    socket.on('join', function(name){
      
      //$('#messages').append($('<li>').text(name+' entrou..'));
      //$('#messages').append($('<div class="container" style="width:auto"><p>' + name + '</p><span class="time-right">' + time + '</span></div>'));
      $('#messages').append($('<p class = "bold">').text( name + ' entrou..'));
      console.log(time);
    });
  })
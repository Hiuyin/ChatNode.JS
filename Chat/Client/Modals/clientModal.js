

$(function(){
var socket = io();
$('#myModal').modal({
    keyboard: true
  });
$('#Username_button').click(function(){
    socket.emit('join', $("#form").val());
    $('#myModal').modal('toggle');
})
})

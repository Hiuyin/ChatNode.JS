
var meuNome = "";


$(function(){
    var socket = io();
$('#myModal').modal({
    keyboard: true
  });
  $('#Username_button').click(function(){
    meuNome = $("#form").val();
    socket.emit('join',meuNome);
    $('#myModal').modal('toggle');
  });
})

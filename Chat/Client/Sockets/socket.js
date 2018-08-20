
$(function(){
    var socket = io();
    $('form').submit(function(){
      socket.emit('chat message',$('#m').val());
      $('#m').val('');
      return false;
    });

    socket.on('chat message',function(msg){
      var date = new Date();
      var minute = date.getMinutes();
      var time = getTime(date);
      $('#messages').append($('<div class="container" style="width:auto"><p>' + msg + '</p><span class="time-right">' + time + '</span></div>'));
    });

    socket.on('join', function(name){  
      //$('#messages').append($('<li>').text(name+' entrou..'));
      //$('#messages').append($('<div class="container" style="width:auto"><p>' + name + '</p><span class="time-right">' + time + '</span></div>'));
      $('#messages').append($('<p class = "bold">').text(  name + ' entrou..'));
    });

   
    
    
  })

  function getTime(date){
    var time = "";

    if(date.hour<10){
      time = '0'+date.hour;

      console.log(time);
    }else{
      time = date.hour;
      console.log(time);
    }
    console.log(time);
    if(date.minute<10){
      time = time+':0'+date.minute;
      console.log(time);

    } else {

      if(date.minute<1){
        time = time+':00';
        console.log(time);
      }else{
        time = time+':'+date.minute;
        console.log(time);
      }

    }
    return time;

  }
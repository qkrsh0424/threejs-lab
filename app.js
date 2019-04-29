// var express = require('express');
// var app = express();
// app.use(express.static('public'));
//
// app.get('/',function(req,res){
//    res.sendfile('index.html');
// });
//
// app.listen(3000,function(){
//    console.log('server running on 3000 port');
// });
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
   res.send('<h1>Hello world</h1>');
});

io.on('connection', function (socket) {
   console.log('client '+ socket.id + ' connected');
   socket.on('player', function (data) {
      data.socketid = socket.id;
      socket.broadcast.emit('player', data);
   });
   socket.on('disconnect', function () {
      console.log('client ' + socket.id + ' disconnected');
      socket.broadcast.emit('offline', {socketid: socket.id});
   })
});

http.listen(3000, function(){
   console.log('listening on *:3000');
});

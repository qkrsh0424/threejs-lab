var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendfile('index.html');
});

app.listen(4000,function(){
    console.log('server running on 4000 port');
});

var express = require('express');
var app = express(); 
var path = require('path');
var port = process.env.PORT || 5000;

//app.use(express.static(path.join(__dirname, "..", "public")));

app.listen(port, function() { 
    console.log('connected to port ' + port);
})
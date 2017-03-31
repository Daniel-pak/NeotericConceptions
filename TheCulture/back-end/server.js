var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var path = require('path');
var config = require('./config');
var port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(morgan('dev'));

mongoose.connect(config.database, function (err) {
    if (err) throw err;
    console.log("Connected to the database");
}) //creating the database this goes in the config file

app.use(express.static(path.join(__dirname,"..", "public")));


app.use('/blogs', require('./routes/blogRoutes'));
// app.use('/admin', require)

app.listen(port, function () {
    console.log("server listening on port " + port);
})

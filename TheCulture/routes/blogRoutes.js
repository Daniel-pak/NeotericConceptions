var express = require("express");
var blogRoutes = express.Router();
var Blog = require('./../models/blog')

blogRoutes.get('/', function(req, res) {
    console.log("this should run!")
    Blog.find(function(err, blogs){
        if (err) return res.status(500).send(err);
        res.send(blogs);
    })
})


module.exports = blogRoutes; 
var express = require("express");
var blogRoutes = express.Router();
var Blog = require('./../models/blog')

blogRoutes.get('/', function(req, res) {
    Blog.find(function(err, blogs){
        if (err) return res.status(500).send(err);
        res.send(blogs);
    })
})

blogRoutes.get('/:id', function(req, res){
    Blog.findById(function(err, blog){
        if (err) return res.status(500).send(err);
        if (!blog) return res.status(404).send({success: false, message: "Blog post not found"});
        return res.status(202).send(blog)
    })
})

module.exports = blogRoutes; 
var express = require ("express");
var podcastRoutes = express.Router();
var Podcast = require ("./../models/podcast");

podcastRoutes.get("/", function (req, res) {
    Podcast.find(function (err, podcasts) {
        if (err) return res.status (500).send(err);
        res.send(podcasts)
    })
});

podcastRoutes.post("/", function (req, res) {
    var podcast = new Podcast(req.body);

    podcast.save(function (err, newPodcast) {
        if (err) return res.status (500).send(err);
        res.send(newPodcast)
    })
});

module.exports = podcastRoutes;
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var PodcastSchema = new Schema({

    image: String,
    title:{
        type: String,
        required: true
    },
    audio:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Podcast', PodcastSchema);

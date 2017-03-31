var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

var BlogSchema = new Schema({ 
    title: { 
        type: String, 
        required: true
    }, 
    body: { 
        type: String, 
        required: true
    }, 
    image: String
})

module.exports = mongoose.model("Blog", BlogSchema);
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    caption: {
        type: String,
        required: true,
        trim: true
    },
    url: {
        type: String,
        required: true,
    },
    upvote:{
        type:Number,
    },
    confirm:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true,
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
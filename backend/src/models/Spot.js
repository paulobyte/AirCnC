const mongoose = require('mongoose');

const localhost = require('../config/localhost');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON:{
        virtuals: true,
    },
});

SpotSchema.virtual('thumbnail_url').get(function() {
    return `http://${localhost.LocalHost}:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema);
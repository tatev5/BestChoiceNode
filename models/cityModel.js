const mongoose = require('mongoose');
const { Schema } = mongoose;

const CitySchema = new Schema({
    startingPoint: String,
    endPoint: String,
    costOfDelivery: String,
});

module.exports = mongoose.model('Cities', CitySchema);
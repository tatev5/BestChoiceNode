const mongoURL = require('./mongooseCon.controller');
const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(res => {
  console.log('Connected!');
}).catch(err => {
  return console.error(err.message);
})

const productSchema = new Schema({
    name:String,
    brand:String,
    price: Number, 
    description:String,
    featured: Boolean,

 });

module.exports= mongoose.model("Product", productSchema);

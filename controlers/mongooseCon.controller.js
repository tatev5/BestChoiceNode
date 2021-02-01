const mongoose = require("mongoose");

const connection = mongoose.connect('mongodb://localhost:27017/DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(res => {
  console.log("connected DB");
}).catch(err => {
  console.error(err.message);
});

module.exports = connection;
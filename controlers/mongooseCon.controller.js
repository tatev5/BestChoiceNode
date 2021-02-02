const mongoose = require("mongoose");
const URL="mongodb+srv://admin:admin@cluster0.95ihl.mongodb.net/<dbname>?retryWrites=true&w=majority"|| 'mongodb://localhost:27017/DB'

const connection = mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(res => {
  console.log("connected DB");
}).catch(err => {
  console.error(err.message);
});

module.exports = connection;

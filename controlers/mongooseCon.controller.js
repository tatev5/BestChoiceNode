const mongoose = require("mongoose");
const URL="mongodb+srv://example:example123@cluster0.mp4bd.mongodb.net/export?authSource=admin&replicaSet=atlas-4kvxp2-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"|| 'mongodb://localhost:27017/DB'

const connection = mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(res => {
  console.log("connected DB");
}).catch(err => {
  console.error(err.message);
});

module.exports = connection;

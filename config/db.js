const dotenv=require("dotenv");
/*dotenv.config({
  path:"./../.env"
})*/
dotenv.config()
const mongoose = require('mongoose');

console.log(process.env.MONGO_URI)

async function db() {
  await mongoose.connect(process.env.MONGO_URI);
}
module.exports=db;
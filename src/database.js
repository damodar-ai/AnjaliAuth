mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Anjali").then(()=>
console.log("Connected to MongoDB")
).catch((err)=> console.error(err));

schema= mongoose.Schema({
    username:String,
    password:String,
})
StudentModel = mongoose.model('Student',schema)
module.exports = StudentModel
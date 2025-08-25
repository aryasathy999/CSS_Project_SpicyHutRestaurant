const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/KGISL");
connect.then(()=>{
    console.log("Database connected")
})
.catch(()=>{
    console.log("Database cannot be connected");
})
const LoginSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password: {
        type:String,
        required: true
    }
})
const collection = new mongoose.model("users", LoginSchema);
module.exports = collection;
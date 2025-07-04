// model is created with the help of mongoose so import
const mongoose = require('mongoose')


const userSchema = new mongoose.Schema( {
    username:{
        type : String,
        required:true
    },
    email:{
        type : String,
        required:true
    },
    password:{
        type : String,
        required:true
    },
    address:{
        type : String,
        default : ""   
    },
    city:{
        type : String,
        default : ""   
    },
    state:{
        type : String,
        default : ""   
    },
    zip:{
        type : String,
        default : ""   
    }
})



const users = mongoose.model('users', userSchema )
module.exports = users
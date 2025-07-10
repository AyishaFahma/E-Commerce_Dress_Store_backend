

const mongoose = require('mongoose')

const sellSchema = new mongoose.Schema( {
    
    title:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    condition:{
        type:String,
        required:true
    },
    material:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    dprice:{
        type:Number,
        required:true
    },
    uploadImages:{
        type:Array,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default: "Pending"
    },
    BroughtBy:{
        type:String,
        default: ""   
    },
    userMail :{
        type:String,
        default: ""
    }

})



const sells = mongoose.model("sells" , sellSchema)

module.exports = sells
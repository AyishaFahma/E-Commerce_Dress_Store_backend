

const mongoose = require('mongoose')

const productSchema = new mongoose.Schema( {
    
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
    bust:{
        type:Number,
        required:true
    },
    waist:{
        type:Number,
        required:true
    },
    hip:{
        type:Number,
        required:true
    },
    sku:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    },
    frontlength:{
        type:Number,
        required:true
    },
    backlength:{
        type:Number,
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



const products = mongoose.model("products" , productSchema)

module.exports = products
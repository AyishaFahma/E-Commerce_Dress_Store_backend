

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
        default: ""
    },
    waist:{
        type:Number,
        default: ""
    },
    hip:{
        type:Number,
        default: ""
    },
    sku:{
        type:String,
        default: ""
    },
    rating:{
        type:String,
        default: ""
    },
    frontlength:{
        type:Number,
        default: ""
    },
    backlength:{
        type:Number,
        default: ""
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
        default: ""
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
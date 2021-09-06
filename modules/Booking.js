const mongoose = require('mongoose');
const Product = require('./productModule');
const date = new Date().toLocaleDateString("en-US").split("/").toString()
const Booking = mongoose.model('Booking',{

UserId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    require:true
},
Qty:{
    type:Number,
    default:1
},
ProductId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Food'
},
Date:{
    type:String,
    default:date
}




});

module.exports =Booking
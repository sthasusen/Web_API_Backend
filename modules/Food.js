const mongoose = require('mongoose')
const Food = mongoose.model('Food',{


Name:{
    type:String,
    require:true
},
Description:{
    type:String
},


Price:{
    type:Number,
    require:true
},
Image:{
    type:String
},
Rating:{
    type:Number,
    default:1
}



})

module.exports = Food
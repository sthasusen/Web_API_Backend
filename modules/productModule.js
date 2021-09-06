const mongoose = require('mongoose')
const Product = mongoose.model('Product',{
    Product_Name:{
        type:String
    },
    Product_Price:{
        type:String
    },
    Product_Desc:{
        type:String
    },
        Product_Image:{
        type:String
    },
    Product_Qty:{
        type:Number
    },
    Product_Rating:{

        type:Number
    }


})
module.exports = Product
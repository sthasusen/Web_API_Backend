const mongoose = require('mongoose')


const User = mongoose.model('User',{

FirstName:{
    type:String
},
Lastname:{
    type:String
},

PhoneNumber:{
    type:String
},

Username:{
    type:String
},
Password:{
    type:String
},
Profile:{
    type:String,
    default:"no-image"
},

UserType:{
    type:String,
    enum:['Admin','Customer']  ,
    default:"Customer"
}


})





module.exports= User


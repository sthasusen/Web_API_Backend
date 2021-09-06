const { json } = require('express')
const express = require('express')
const { verifyUser } = require('../middleware/auth')
const router = express.Router()
const Booking = require('../modules/Booking')
const Product = require('../modules/productModule')
const date = new Date().toLocaleDateString("en-US").split("/").toString()

router.post('/booking/:pid',verifyUser,function(req,res){
console.log(req.user)
const uid= req.user._id
const pid= req.params.pid
Booking.findOne({UserId:uid,ProductId:pid}).then(function(data){

if(!data){
    const data = new Booking({UserId:uid,ProductId:pid})
    data.save().then(function(r){
        console.log("Booking ma chiryo")
        res.status(200).json({message:"Booking Succesful",success:true})
    }).catch((err)=>{
    
    console.log(err)
    
    })
}
else{


    Booking.findByIdAndUpdate({UserId:uid},{Qty:data.Qty+1})
}

})



})

router.delete('/delete/:id',function(req,res){
    Booking.findByIdAndDelete({_id:req.params.id}).then(function(data){


        res.status(200).json({success:true})
    })
})



router.get('/booking/show',verifyUser,function(req,res){
const id = req.user._id
let total =0
Booking.find({UserId:id}).populate('UserId').populate('ProductId').then(function(data){
    console.log(data)
  data.map((data)=>{
 


    
        let qty = data.Qty
        let price = data.ProductId.Price;
         total += price * qty
      
      })
console.log(total)
res.status(200).json({data:data,total:total})
}).catch()
})

router.put('/updateBooking/:bid',verifyUser,function(req,res){
    console.log("Update Booking")
console.log(req.body.Qty)
Booking.findOneAndUpdate({_id:req.params.bid},{
    Qty:req.body.Qty
}).then(function(data){
    res.status(200).json({success:true})
})

})




module.exports=router;
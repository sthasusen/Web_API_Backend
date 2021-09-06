const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
const Food = require('../modules/Food')
const auth = require('../middleware/auth')


router.post('/food/insert',upload.single("image"),function(req,res){

console.log("food")
console.log(req.body)
const name= req.body.Name
const description = req.body.Description
const price = req.body.Price
const rating = req.body.Rating
const data = new Food({Name:name,Description:description,Price:price,Rating:rating, Image:req.file.filename})
data.save().then(function(result){
    res.status(200).json({success:true,data:data})
})


})
router.put('/food/photo/:id',upload.single("file"),function(req,res){
console.log("foods")

const id = req.params.id
const file = req.file
Food.findByIdAndUpdate({_id:id},{
    Image:file.filename  }).then(function(result){
        res.status(200).json({status:true,message:"Updated"})
    })
})

router.get('/food/show',function(req,res){
Food.find().then(function(result){
res.status(200).json({status:true,data:result})

})
router.get('/food/single/:id',function(req,res){
  console.log('asdasdasdasd')
Food.findOne({_id:req.params.id}).then((data)=>{
res.status(200).json({data:data})
})

})

router.put('/food/update/:id',upload.single('image'),function(req,res){

  const file = req.file
  const name= req.body.Name
  const description = req.body.Description
  const price = req.body.Price
  const image = file.filename
  Food.findByIdAndUpdate({_id:req.params.id},{

    Name:name,
    Description:description,
    Price:price,
    Image:image
  }).then((data)=>{
    res.status(200).json({message:"One Item Updatead"})
  })

})
router.delete('/d/:id',function(req,res){
console.log("asdasdasd")
  Food.findOneAndDelete({_id:req.params.id}).then((data)=>{

    res.status(200).json({success:true,message:"asdasdasdads"})
  })
})



})
router.get('/search/:name',(req,res)=>{

  Food.find({Name:{$regex:req.params.name,$options:'$i'}}).then((data)=>{
    res.status(200).json({success:true,data:data})
  })
  
  })

module.exports = router





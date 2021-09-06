const express =require('express')
const router = express.Router()
const Product = require('../modules/productModule')
const auth=require('../middleware/auth')
const upload = require('../middleware/upload')

router.post('/product/insert',upload.single('Product_Image'),function(req,res){
   console.log(req.files.file)
   console.log(req.files.Product_Image)


if(req.file == undefined)
{
    return res.status(400).json({message:"Not suitable type"})
}

   
    const Product_Name=req.body.Product_Name;
    const Product_Desc=req.body.Product_Desc;
    const Product_Price=req.body.Product_Price;
    const Product_Image=req.file.path


    const pqty = req.body.Product_Qty
const prating = req.body.Product_Rating
    const pdata = new Product({Product_Name:Product_Name,Product_Desc:Product_Desc,Product_Price:Product_Price,Product_Image:Product_Image,Product_Rating:prating,Product_Qty:pqty});
pdata.save()
.then(function(result){
    res.status(201).json({message:"Product inserted!!!"})

})
.catch(function(e){
    res.status(500).json({error:e})
})
})


router.post('/product/delete',auth.verifyUser,auth.verifyAdmin,function(req,res){
    const Product_Name=req.body.Product_Name;
    const Product_Desc=req.body.Product_Desc;
    const Product_Price=req.body.Product_Price;
    const Product_Image=req.body.Product_Image;
    const pdata = new Product({Product_Name:Product_Name,Product_Desc:Product_Desc,Product_Price:Product_Price,Product_Image:Product_Image});
pdata.save()
.then(function(result){
    res.status(201).json({message:"Product inserted!!!"})

})
.catch(function(e){
    res.status(500).json({error:e})
})
})


router.put('/product/update',auth.verifyUser,auth.verifyAdmin,function(req,res){


const pname = req.body.Product_Name
const pprice = req.body.Product_Price
const pdesc = req.body.Product_Desc
const pimage = req.body.Product_Image
const pqty = req.body.Product_Qty
const prating = req.body.Product_Rating

const id = req.body._id
Product.updateOne({_id:id},{
    Product_Name:pname,
    Product_Desc:pdesc,
    Product_Image:pimage,
    Product_Price:pprice,
Product_Qty:pqty,
Product_Rating:prating}).then(function(result){

res.status(200).json({message:"Product updated!!"})

    }).catch(function(err){
        res.status(500).json({error:err})
    })







})
router.delete('/product/delete/:id',function(req,res){

const id = req.params.id
Product.deleteOne({_id:id}).then(function(result){
    res.status(200).json({message:"Deleted"})
}
    
).catch(function(err){
    res.status(500).json({error:err})
})


})



router.get('/product/show',function(req,res){

const data = Product.find().then(function(result){

    res.status(200).json({result})
}).catch(function(error){
res.status(500).json({error:error})

})

})


router.get('/product/showOne/:id',function(req,res){

const id = req.params.id

const data = Product.findOne({_id:id}).then(function(result){

    res.status(200).json({data})
}).catch(function(err){
    res.status(200).json({error:err})

})

})


module.exports=router;

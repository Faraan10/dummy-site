
const mongoose=require("mongoose")
const prodSchema=mongoose.Schema({
    productName:String,
    productPrice:Number,
    productDescription:String,
    productImage:String
})

const Product=mongoose.model("ecommerce_site_products",prodSchema)

module.exports=Product
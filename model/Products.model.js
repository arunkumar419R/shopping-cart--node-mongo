const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
	productId : String,
    productBrand : String,
    productName : String,
    productPrice : Number,
    productMRP : Number,
    productImgUrl : String,
    productOfferText : String,
    recCrtTs : {type: Date, default: Date.now},
    recUpdTs : Date
})

module.exports = mongoose.model("products",productsSchema)
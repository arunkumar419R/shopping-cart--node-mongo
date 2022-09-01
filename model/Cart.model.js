const mongoose = require('mongoose');

const cartShema = new mongoose.Schema({
	userId 		: String,
	cartId 		: String,
    productId 	: String, 
    quantity 	: String, 
    recCrtTs 	: {type: Date, default: Date.now},
    recUpdtTs 	: Date,
    orderId 	: String,
    isCheckOut: Boolean,
    total :     Number        	
})

module.exports = mongoose.model("cart",cartShema)
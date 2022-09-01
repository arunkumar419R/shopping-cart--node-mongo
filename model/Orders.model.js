const mongoose = require('mongoose')

const ordersSchema = new mongoose.Schema({
		orderId : String,
		total : Number,
		userId : String,
		creditCardId : String,
		recCrtTs : {type: Date, default: Date.now},
		recUpdtTs : Date
})

module.exports  = mongoose.model("orders",ordersSchema)
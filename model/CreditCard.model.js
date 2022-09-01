const mongoose = require('mongoose')

const creditCardSchema = new mongoose.Schema({
		cardId: String,
		cvc: String,
        expiry: String,
        cardHolderName: String,
		cardNumber: Number,
		userId : String,
		recCrtTs: {type: Date, default: Date.now},
		recUpdtTs: Date
})
module.exports = mongoose.model("creditCard",creditCardSchema)
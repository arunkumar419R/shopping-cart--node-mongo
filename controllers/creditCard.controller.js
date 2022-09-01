const creditCard = require('../model/CreditCard.model')

exports.addCreditCard = (req, res)=>{
	const card = new creditCard({
		cardId: req.body.cardId,
		cvc: req.body.cvc,
        expiry: req.body.expiry,
        cardHolderName: req.body.cardHolderName,
		cardNumber: req.body.cardNumber,
		userId : req.body.userId
	});
	card.save(card).then(docs=>{
		res.send(docs);
	},err=>{
		throw err;
	})
} 

exports.getCreditCard = (req, res)=>{
	const query = {
		userId : req.params.userId
	}
	creditCard.findOne(query).then(docs=>{
		res.send(docs);
	},err=>{
		throw err;
	})
}
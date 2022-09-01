const  orders = require('../model/Orders.model')
const cartController = require('../controllers/cart.controller')

exports.placeOrder = async (req, res)=>{
	try{
		const cartRes = await cartController.processcarts(req.body);
		const order = new orders({
			orderId : req.body.orderId,
			total : req.body.finalAmount,
			userId : req.body.userId,
			creditCardId : req.body.creditCardId
		});
		try{
			const orderRes = await order.save(order);
			res.send(orderRes);
		}catch(err){
			throw err
		}
	}catch(err){
		throw err;
	}
}
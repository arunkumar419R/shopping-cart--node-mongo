const products = require('../model/Products.model')

exports.getProducts = (req, res)=>{
	products.find((err, docs)=>{
		if(!err){
			res.send(docs);
		}else{
			throw err;
		}
	})
}

exports.getProduct = (req, res)=>{
	const query = {
		productId : req.params.productId
	}

	products.findOne(query,(err, docs)=>{
		if(!err){
			res.send(docs);
		}else{
			throw err;
		}
	})
}

exports.getCartProducts = async (productIds)=>{ 
	const query = {productId : {$in : productIds}}
	try{
		return await products.find(query);
	}catch(error){
		throw error;
	}
}

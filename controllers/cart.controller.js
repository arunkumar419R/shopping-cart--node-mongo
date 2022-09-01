const carts = require('../model/Cart.model')
const productsController = require('../controllers/products.controller'); 
exports.getCarts = (req, res)=>{

}

 exports.addCart = (req, res)=>{
	const query = {
				userId : req.body.userId,
				productId : req.body.productId,
				isCheckOut : false
			}
	 carts.find(query).then(docs=>{
	 		if(docs.length == 0){
	 			const cart = buildCart(req.body);
			cart.save(cart).then(docs=>{
			res.send(true);
			},err=>{
				res.send("Failed to add cart");
				throw err;
			})
	 		}else{
	 			res.send(true);
	 		}
			
		},err=>{
			throw err;
		})
}

exports.getCartCount = (req, res)=>{
	const query = {
		userId : req.params.userId,
		isCheckOut : false
	}
	carts.find(query).then(docs=>{
		res.send(docs);
	},err=>{
		res.send("Failed to get cart count");
		throw err;
	})
}

	

buildCart = (obj)=>{   
	const cart = new carts({
		userId 		: obj.userId,
		cartId 		: obj.cartId,
	    productId 	: obj.productId, 
	    quantity 	: obj.quantity, 
	    recUpdtTs 	: '',
	    orderId 	: '',
	    isCheckOut  :  obj.isCheckOut,
	    total : obj.total           	
	})
	return cart;
}


exports.cartItems = async (req, res)=>{
	try{
		const cartItems = await getCartItems(req);
		const cartProducts = await productsController.getCartProducts(getProductIds(cartItems));
		res.send(extract(cartItems, cartProducts));
	}catch(error){
		console.log(error);
		throw error;
	}
} 

 getCartItems = async (req)=>{
	const query = {
		userId : req.params.userId,
		isCheckOut : false
	}
	try{
		 const response = await carts.find(query);
		 return response;
	}catch(err){
	throw err;
	}
}


getProductIds = (cartItems)=>{
	var productIds = [];
	for(let i=0; i<cartItems.length; i++){
		 productIds.push(cartItems[i].productId);
	}
	return productIds;
}

extract = (cartItems, cartProducts)=>{
	const list = [];
	cartItems.map(cartItem=>{
		const res = cartProducts.filter(product=>product.productId === cartItem.productId);
		list.push(decorate(cartItem,res[0]));
	})
	return list;
}

decorate = (cartItem, cartProduct)=>{
		const obj = {
			cart: cartItem,
			product: cartProduct
		}
		return obj;
}

exports.updateQuantity = (req, res)=>{
	const query = {
		cartId: req.body.id,
	}
	const params = {
		$set:{quantity : req.body.quantity,total : req.body.total},
		 $currentDate: { recUpdtTs: true }
	}

	carts.updateOne(query,params).then(docs=>{
		res.send(docs);
	},err=>{
		throw err;
	})
}

exports.deleteCart = (req, res)=>{
	carts.deleteOne({cartId: req.params.cartId}).then(docs=>{
		res.send(docs);
	},err=>{
		throw err;
	})
}

exports.processcarts = async (data)=>{
	var cartIds = [];
	data.items.map(item=>{
		cartIds.push(item.cart.cartId);
	});
	const query = {
		cartId : {$in: cartIds}
	}
	const params = {
		$set:{orderId: data.orderId, isCheckOut : true},
		$currentDate:{recUpdtTs: true}
	}
	try{
		return await carts.updateMany(query, params);
	}catch(err){
		throw err;
	}
}



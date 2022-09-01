module.exports = (app)=>{
	const bodyParser = require("body-parser");
    const cors = require('cors');
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    const cartController = require('../controllers/cart.controller');

    app.get('/cart',cartController.getCarts);
    app.post('/cart/addCart',cartController.addCart);
    app.get('/cart/cartCount/:userId',cartController.getCartCount);
    app.get('/cart/cartItems/:userId', cartController.cartItems);
    app.put('/cart/updateQuantity',cartController.updateQuantity);
    app.get('/cart/deleteCart/:cartId',cartController.deleteCart);
}
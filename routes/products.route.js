module.exports = (app) =>{

	const bodyParser = require("body-parser");
    const cors = require('cors');
    app.use(cors());
    
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    const productsController = require('../controllers/products.controller');

    app.get('/products',productsController.getProducts);

    app.get('/products/:productId',productsController.getProduct);
}
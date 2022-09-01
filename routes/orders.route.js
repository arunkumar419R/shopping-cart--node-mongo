module.exports = (app)=>{
	const bodyParser = require("body-parser");
    const cors = require('cors');
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    const ordersController = require('../controllers/orders.controller');

    app.post('/orders/placeOrder',ordersController.placeOrder);
}
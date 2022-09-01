module.exports = (app)=>{
	const bodyParser = require("body-parser");
    const cors = require('cors');
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    const creditCardController = require('../controllers/creditCard.controller')

    app.post('/credit/addcard',creditCardController.addCreditCard);
    app.get('/credit/getcard/:userId',creditCardController.getCreditCard);
}
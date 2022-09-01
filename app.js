const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const port = 8082;
const dbCongig = require('./config/db.config')
require('./routes/users.route')(app);
require('./routes/products.route')(app);
require('./routes/cart.route')(app);
require('./routes/creditCards.route')(app);
require('./routes/orders.route')(app);



app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//app.use("/users", usersController);


mongoose.connect(dbCongig.url,{useNewUrlParser: true, useUnifiedTopology: true },(err,db)=>{
  if(!err){
      console.log("mondodb connection successfull")
  }else{
      console.log(err)
      throw err
  }
})

app.get('/',(req,res)=>{
    console.log(req);
    res.send("<h1>welcome to my shoppingcart</h1>");
});

app.listen(port,() =>{
    console.log(`server is running at port ${port}`)
});
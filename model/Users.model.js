const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    userId : String,
    userName : String,
    password : String,
    isActive : Boolean,
    userRole : String,
        registration : {
          firstName : String,
          lastName : String,
          age : String,
          gender : String,
          mobileNumber : String,
          emailId : String,
          country : String,
          state : String,
          profession : String,
          pinCode : String,
          recCrtTs : Date,
          recUpdTs : Date
        }
})

module.exports = mongoose.model("users", usersSchema)
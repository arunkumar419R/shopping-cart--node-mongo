const users = require('../model/Users.model')

exports.findAll = (req, res)=>{
    users.find((err, docs)=>{
        if(!err){
            res.send(docs);
        }else{
            throw err
        }
    })
};

exports.addUser = (req, res)=>{
    const user = buildUser(req.body);
    user.save((err, docs)=>{
        if(!err){
            res.send(docs);
        }else{
            throw err;
        }
    });
};

exports.deleteUser = (req, res)=>{
    users.findByIdAndRemove(req.params.userId,()=>{
        if(!err){
            res.send(docs);
        }else{
            throw err;
        }
    })
}

// exports.findUserById = (req, res)=>{
//     users.findById(req.params.userId,(err, docs)=>{
//         if(!err){
//             res.send(docs);
//         }else{
//             throw err;
//         }
//     })
// }

exports.updateUser = (req, res)=>{

}

exports.login = (req,res)=>{
    const query = {
        userName : req.body.userName,
        password : req.body.password
    }

    users.find(query,(err, docs)=>{
        if(!err){
            if(docs.length > 0){
                res.send(docs);
            }else{
                res.send("INVALID");
            }
        }else{
            res.send("Something went wrong...");
        }
    });
    
}

buildUser = (obj)=>{
    const user = new users({
        userId : obj.userId,
        userName : obj.userName,
        password : obj.password,
        isActive : obj.isActive,
        userRole : obj.userRole,
        registration : {
            firstName : obj.registration.firstName,
            lastName : obj.registration.lastName,
            age : obj.registration.age,
            gender : obj.registration.gender,
            mobileNumber : obj.registration.mobileNumber,
            emailId : obj.registration.emailId,
            country : obj.registration.country,
            state : obj.registration.state,
            profession : obj.registration.profession,
            pinCode : obj.registration.pinCode,
            recCrtTs : obj.registration.recCrtTs,
            recUpdTs : ''
        }
    });
    return user;
}
//module.exports = router;




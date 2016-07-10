var router =require('express').Router();
var UserModel = require('../models/user').model();

// route to create new users
router.post('/',function(req,res){
	//UserModel.inser
	var user = new UserModel();
	user.username = req.body.username;
	user.password = req.body.password;
    user.email = req.body.email;
	user.userType = req.body.userType;
	user.courses = req.body.courses;
	user.birthday = req.body.birthday;
	user.subscriptionType = req.body.subscriptionType;
	user.gender = req.body.gender;
	user.school = req.body.school;
	user.address = req.body.address;

	
	//
    user.save(function(err) {
            if (err)
				{
                res.send({ status:'failed',message: err});
				}else

            res.json({ status:'success',message: 'user created created!'});
        });
	
});



//route to get all the users 
router.get('/',function(req,res){
	  UserModel.find(function(err, users) {
            if (err)
                res.send({status:'failed',message:'error getting all users'});
		  	else
            	res.json(users);
        });
});



module.exports = router;
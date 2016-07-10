var express = require('express');
var router = express.Router();
var app = require('../app');
var UserModel = require('../models/user').model();
var jwt = require('jsonwebtoken');


//var UserModel = User.model();


// middlewear used to create, sign, and verify tokens
//router.use(function (req, res, next) {
//
//	if ((req.url === '/authenticate' || req.url === '/user') && (req.method ==='POST')) {
//		next();
//	} else {
//		// check header or url parameters or post parameters for token
//		var token = req.body.token || req.query.token || req.headers['x-access-token'];
//
//		// decode token
//		if (token) {
//			// verifies secret and checks exp
//			jwt.verify(token, app.get('superSecret'), function (err, decoded) {
//				if (err) {
//					return res.json({
//						success: false
//						, message: 'Failed to authenticate token.'
//					});
//				} else {
//					// if everything is good, save to request for use in other routes
//					req.decoded = decoded;
//					next();
//				}
//			});
//
//		} else {
//
//			// if there is no token
//			// return an error
//			return res.status(403).send({
//				success: false
//				, message: 'No token provided.'
//			});
//
//		}
//	}
//});


/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'Welcome to Mustajo Home page'
	});
});

module.exports = router;
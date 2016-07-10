var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var validator = require('validator');
var courseSchema = require('./course').schema;


var validateEmail = function (email) {
	return validator.isEmail(email);
};

var validateType = function (type) {
	return ((type === 'student') || (type === 'teacher') || (type === 'parent'));
};

var validateGender = function(gender){
     return ((gender ==='male')||(gender === 'female'));	
};

var userSchema = new Schema({
	username: {
		type: String
		, required: true
		, index: {
			unique: true
		}
	}
	, email: {
		type: String
		, trim: true
		, lowercase: true
		, index: {
			unique: true
		}
		, required: 'Email address is required'
		, validate: [validateEmail, 'Please fill a valid email address']
	}
	, password: { //password is validated at client
		type: String
		, required: true
	, }
	, userType: {
		type: String
		, default: 'student'
		, validate: [validateType, 'please enter a valid type']
	}
	, courses: [{
		courseId: {
			type: Schema.Types.ObjectId
			, ref: 'courseSchema'
		}
	}]
	, birthday: Date
	, subscriptionType: {
		type: String
		, default: 'freemium'
	},
	gender:{
	   type:String,
		required:true,
	   validate:[validateGender,'please enter a valid gender']
	},
	school:String,
	adress: String
	, createdAt: {
		type: Date
		, default: Date.now
	}
	, updatedAt: Date
, });


// on every save, add the date
userSchema.pre('save', function (next) {

	// change the updated_at field to current date
	this.updatedAt = new Date();

	//hashpasswords 
	var hash = bcrypt.hashSync("this.password");
	this.password = hash;
	// bcrypt.compareSync("this.password", hash); // true
	// bcrypt.compareSync("veggies", hash); // false
	next();
});


// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);


exports.model = function () {
	return User;
}

exports.schema = function () {
		return userSchema;
	}
	//module.exports = User;
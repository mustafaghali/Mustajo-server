var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = require('./user').schema;
var instructorSchema = require('./instructor').schema;

	var courseSchema = new Schema({
  title: { 
	  type: String,
	  required: true,
	  index:{unique: true}
  },
	shortDiscription:{
		type:String,
		required:true
	},
	longDiscription:{
		type:String,
		required:true
	},
	instructorId:{
	    type:Schema.Types.ObjectId,
		ref:'instructorSchema'
	},
   videos:[{
	   videoID:{
		   type:Schema.Types.ObjectId,
		   ref:'videoSchema'
	   }
        
    }],
	imageUrl:String,
	category:{type:{name:String,iconUrl:String},required:true},
	publishedAt:{type:Date,default:Date.now}
});


var Course = mongoose.model('Course', courseSchema);

exports.schema = function(){
    return courseSchema;
}


exports.model = function(){

   return Course;
}



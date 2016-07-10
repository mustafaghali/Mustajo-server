var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//var userSchema = require('./user').schema;
var commentSchema = require('./comment').schema;
//var instructorSchema = require('./instructor').schema;

	var   videoSchema = new Schema({
        title: {
			type:String,
			required:true
		},
	   numberOfViews:{
		   type:Number,
		   default:0
	   },
	   url:{
		   type:String,
		   required:true
	   },
	   length:{
		   type:Number,
		   default:0
	   },
	   intro:{
		   type:Boolean,
		   default:false
	   },
	   comments:[{
			   commentID:{
			   type:Schema.Types.ObjectId,
			   ref:'commentSchema'}
		   }],
	   imageUrl:{
		   type:String,
		   required:true
	   }
	});


var Video = mongoose.model('Video', videoSchema);

exports.schema = function(){
    return videoSchema;
}


exports.model = function(){

   return Video;
}
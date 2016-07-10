var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = require('./user').schema;

	var   commentSchema = new Schema({
		   createdAt:{
			   type:Date,default:Date.now
		   },
		   userID:{
			   type:Schema.Types.ObjectId,
			   ref:'userSchema'
		   },
		   text:{
			   type:String,
			   required:true
		   },
		   likes:[{
			   userId:{
			   type:Schema.Types.ObjectId,
			   ref:'userSchema'}
		   }]
	   });

var Comment = mongoose.model('Comment',commentSchema);

exports.schema = function(){
    return commentSchema;
}


exports.model = function(){

   return Comment;
}



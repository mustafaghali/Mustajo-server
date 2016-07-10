var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var instructorSchema = new Schema({
  name: { 
	  type: String,
	  required: true,
	  index:{unique: true}
  },
	shortBio:{
		type:String,
		required:true
	},
	longBio:String,
	imageUrl:{
		type:String,
		default:'the default ImageUrl'
	},
	category:{type:{name:String,iconUrl:String},required:true},
	publishedAt:{type:Date,default:Date.now}
});


var Instructor = mongoose.model('Instructor', instructorSchema);

exports.schema = function(){
    return instructorSchema;
}

exports.model = function(){

   return Instructor;
}

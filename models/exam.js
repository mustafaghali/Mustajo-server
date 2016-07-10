var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var examSchema = new Schema({
	
	subjectName:{
		type:String,
		index:{unique:true}
	},
	exams:[{
		year:String,
		url:String
	}]
});

var Exam = mongoose.model('AppInfo', examSchema);

exports.schema = function(){
    return examSchema;
}

exports.model = function(){

   return Exam;
}
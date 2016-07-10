var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var appInfoSchema = new Schema({
	
	aboutUs:String,
	MustajoImageUrl:String,
	MustajoIconUrl:String,
});


var AppInfo = mongoose.model('AppInfo', appInfoSchema);

exports.schema = function(){
    return appInfoSchema;
}

exports.model = function(){

   return AppInfo;
}

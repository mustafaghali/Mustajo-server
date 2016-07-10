var mongoose = require('mongoose');
var config =  require('./config');

mongoose.connect(config.database_url,{ config: { autoIndex: false } });

var db = mongoose.connection;

db.on('error', console.error);

db.once('open', function() 
		{
            console.log(`connected to database @ ${config.database_url}`);
});

module.exports = mongoose;

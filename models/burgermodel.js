/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var clientModel = {
	all: function (cb) {     
		orm.all('clients', function (res) {
			cb(res);
			console.log("orm model ALL is working")
		});
	},
	// cols and vals are arrays
	create: function (column, values, cb) {
		orm.create('clients',column,values, function (res) {
			cb(res);
			console.log("orm model CREATE is working")
		});
	},
	update: function (column, newValue, condition, cb) {
		orm.update('clients', column, newValue, condition, function (res) {
			cb(res);
			console.log("orm model UPDATE is working")
		});
	},
	delete: function (condition, cb) {
		console.log("workings??")
		orm.delete('clients',condition, function (res) {
			console.log("workings11111??")
			cb(res);
			console.log("orm model DELELTE is working")
		});
	}
};

//clientModel.all(function(data){console.log(data)});
//clientModel.create('client_name',"yay",function(data){console.log(data)})
// clientModel.update('devoured',0,'id=1', function(data){console.log(data)})
//clientModel.delete('id=5',function(data){console.log(data)})

//TIPS:
//when you call cb don't forget cb is running as a function.



module.exports = clientModel;
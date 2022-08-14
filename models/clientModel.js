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
		orm.delete('clients',condition, function (res) {
			cb(res);
			console.log("orm model DELELTE is working")
		});
	}
};


module.exports = clientModel;





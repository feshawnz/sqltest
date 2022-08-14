/*
Here is where you setup a model for how to interface with the database.
*/

var sectionsOrm = require('../config/sectionsOrm.js');

var sectionsModel = {
	all: function (cb) {     
		sectionsOrm.all('sections', function (res) {
			cb(res);
			console.log("sectionsOrm model ALL is working")
		});
	},
	// cols and vals are arrays
	create: function (column1,column2, values, id, cb) {
		sectionsOrm.create('sections',column1, column2,values,id, function (res) {
			cb(res);
			console.log("sectionsOrm model CREATE is working")
		});
	},
	update: function (column, newValue, condition, cb) {
		sectionsOrm.update('sections', column, newValue, condition, function (res) {
			cb(res);
			console.log("sectionsOrm model UPDATE is working")
		});
	},
	delete: function (condition, cb) {
		sectionsOrm.delete('sections',condition, function (res) {
			cb(res);
			console.log("sectionsOrm model DELELTE is working")
		});
	}
};


module.exports = sectionsModel;





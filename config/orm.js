
var connection = require('../config/connection.js');


var orm = {
	all: function (table, cb) {
		var queryString = 'SELECT * FROM ' + table + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	create: function (table,column,values,cb) {
		var columnString = column.toString();
		var valuesString = "'"+values +"'";
		var queryString = 'INSERT INTO ' + table + ' (' + columnString + ') ' + 'VALUES(' + "'" + values + "'" + ');'
		//TIPS:
		//mysql insert query: INSERT INTO [table] ([column], [column]) VALUES ('[value]', [value]');
		//'[value]' = "'" + value + "'";
		//string type needs " ", and input into mysql needs another "": which ""stringtype"
		console.log(queryString)

		connection.query(queryString, values, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
		// objColVals would be the columns and values that you want to update
		// an example of objColVals would be {name: panther, sleepy: true}
	update: function  (table, column,newValue,condition, cb) {

		//UPDATE `client`.`client_db` SET `client_name`='lz' WHERE `id`='5';

		var queryString = 'UPDATE ' + table + ' SET ' + column + '=' + newValue + ' WHERE ' + condition + ';'

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},


	delete: function (table, condition, cb) {
		var queryString = 'DELETE FROM ' + table;
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};


//orm.all('client_db', function(data){console.log(data);})
//orm.all('client_db', function(aaa){console.log(aaa);})
//orm.update('client_db','client_name','"shawn"','id=1', function(data){console.log(data)})
//orm.update('client_db','devoured',5,'id=1', function(data){console.log(data)})
//orm.delete('client_db','id=5',function(data){console.log(data)})



module.exports = orm;

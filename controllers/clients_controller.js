
var express = require('express');
var router = express.Router();
var clients = require('../models/clientModel.js');

router.get('/', function (req, res) {
	res.redirect('/clients');
});


router.get('/clients', function (req, res) {
	clients.all(function (data) {
		console.log(data)
		var hbsObject = { clients: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});



router.post('/clients/create', function (req, res) {
	console.log("working???")
	clients.create('client_name', [req.body.name], function () {
		res.redirect('/clients');
	});
});


router.put('/clients/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	clients.update('section',req.body.section,condition, function () {

		res.redirect('/clients');
	});
});

router.delete('/clients/delete/:id', function (req, res) {
	var condition = 'id = ' + req.params.id; 

	clients.delete(condition, function () {
		res.redirect('/clients');
	});
});


module.exports = router;

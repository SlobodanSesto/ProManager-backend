const User = require('../models/User');
const jwt = require('jsonwebtoken');
const db = require('../db');

// exports.getUser = ((req, res) => {
// 	let u = new User(1, 'Bob Smith', 'email@email.com');
// 	res.send(u);
// });

exports.authUser = ((req, res) => {
	let email = req.body.email || null;
	let pass = req.body.pass || null;
	// console.log(req.token);
	
	if(req.token) {
		jwt.verify(req.token, process.env.SECRET, function(err, decoded) {
			// err
			if(err) {
				console.log(err);
				if(email && pass) {
					checkCred();
				} else {
					res.sendStatus(403);
				}
			} else {
				console.log(decoded);
				let data = {
					"data": {
						"user": decoded
					},
					"status": "OK"
				};
				res.send(data);
			}
		});
	} else {
		console.log('checking');
		checkCred();
	}

	function checkCred() {
		if(email && pass) {
			let sql = `SELECT * FROM users WHERE usr_email=?`;
			db.query(sql, email, (err, results) => {
				if(results && results.length > 0) {
					// check pass
					if(results[0].usr_password == pass) {
						const payload = {
							id: results[0].usr_id, 
							email: results[0].usr_email,
							name: results[0].usr_name,
							surname: results[0].usr_surname
						}
						// sign/issue token
						jwt.sign(payload, process.env.SECRET, (err, token) => {
							let data = {
								"data": {
									"user": payload,
									"auth": token
								},
								"status": "OK"
							};
							res.send(data);
						})
					} else {
						res.sendStatus(403);
					}
				} else {
					res.sendStatus(403);
				}
			});
		} else {
			res.sendStatus(400);
		}
	}
});
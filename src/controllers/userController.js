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
	if(email && pass) {
		let sql = `SELECT * FROM users WHERE usr_email=?`;
		db.query(sql, email, (err, results) => {
			if(results && results.length > 0) {
				// check pass
				if(results[0].usr_password == pass) {
					const payload = {
						id: results[0].usr_id, 
						email: results[0].usr_email,
						name: results[0].usr_name
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
});
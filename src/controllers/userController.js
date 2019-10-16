const User = require('../models/User');
const db = require('../db');

exports.getUser = ((req, res) => {
	let u = new User(1, 'Bob Smith', 'email@email.com');
	res.send(u);
});

exports.authUser = ((req, res) => {
	let email = req.query.email || null;
	let pass = req.query.pass || null;
	// console.log(req.query.sid);
	if(email && pass) {
		db.connect((err) => {
			if (err) {
				throw err;
			};
			console.log('connection opened');
		});
		let sql = `SELECT * FROM users WHERE usr_email=?`;
		db.query(sql, email, (err, results) => {
			// console.log(results.length);
			if(results && results.length > 0) {
				// check pass
				console.log(results[0].usr_password);
				if(results[0].usr_password == pass) {
					// open session 
					console.log("all good");
					// send sid along with user info
					let data = {
						"data": results,
						"status": "OK"
					};
					res.send(data);
				} else {
					res.send('Wrong Pass');
				}
			} else {
				res.send('no results from db');
			}
			db.end((error) => {
				if(error) { throw error };
				console.log('connection closed');
			});
		});
	} else {
		res.send('params missing');
	}
});
const mysql = require('mysql');

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'promanager'
});

db.connect((err) => {
	if (err) {
		throw err;
	};
	console.log('connection opened');
});

module.exports = db;
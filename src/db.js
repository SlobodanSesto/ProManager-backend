// just here for refrence
const mysql = require('mysql');
console.log( process.env.DB_HOST)

const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME
});

db.connect((err) => {
	if (err) {
		throw err;
	};
	console.log('connection opened aaa');
});

module.exports = db;
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
var cors = require('cors');

dotenv.config();

// Import routes
const auth			= require('./routes/login');
const tasksRouter   = require('./routes/tasks');
const userRouter    = require('./routes/users');
const proRouter     = require('./routes/projects');

const app = express();
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// const TWO_HOURS = 1000 * 60 * 60 * 2;
// const TEN_MIN = 1000 * 60 * 10;
// const {
// 	PORT = 3000,
// 	SESS_LIFETIME = TEN_MIN
// } = process.env;

// FIX FOR CORS ERROR
app.use(cors());
// app.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
// 	next();
// });

// mount router 
// all routes in the auth will be pre-pended with '/api/auth' 
app.use('/api/auth', auth);

// mount router 
// all routes in the tasksRouter will be pre-pended with '/api/tasks' 
app.use('/api/tasks', tasksRouter);

// mount router 
// all routes in the userRouter router will be pre-pended with '/api/users' 
app.use('/api/users', userRouter);

// mount router 
// all routes in the proRouter router will be pre-pended with '/api/projects' 
app.use('/api/projects', proRouter);

// app.get('/', (req, res) => {
//     res.send('Welcome to Pro-Manager');
// });

app.listen( process.env.PORT || 3000 , () => {
    console.log('Pro-Manager back-end is live on port '+process.env.PORT+'!');
});

// const db = mysql.createConnection({
// 	host: process.env.DB_HOST,
// 	user: process.env.DB_USER,
// 	password: process.env.DB_PASS,
// 	database: process.env.DB_NAME
// });

// db.connect((err) => {
// 	if (err) {
// 		throw err;
// 	};
// 	console.log('connection opened test');
// });
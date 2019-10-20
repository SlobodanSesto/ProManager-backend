const express       = require('express');
const tasksRouter   = require('./routes/tasks');
const userRouter    = require('./routes/users');
const proRouter     = require('./routes/projects');
const auth			= require('./routes/login');
const db = require('./db');

// conn setup 
// should probably be abstracted into own module

const app = express();

// FIX FOR CORS ERROR
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});

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
// db.connect((err) => {
// 	if (err) {
// 		throw err;
// 	};
// 	console.log('connection opened');
// });

app.listen('3000', () => {
    console.log('Pro-Manager back-end is live on port 3000!');
});
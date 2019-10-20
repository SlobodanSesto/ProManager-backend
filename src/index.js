const express       = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const session = require('express-session');

// Import routers
const auth					= require('./routes/login');
const tasksRouter   = require('./routes/tasks');
const userRouter    = require('./routes/users');
const proRouter     = require('./routes/projects');

const TWO_HOURS = 1000 * 60 * 60 * 2;
const TEN_MIN = 1000 * 60 * 10;
const {
	PORT = 3000,
	SESS_LIFETIME = TEN_MIN
} = process.env;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
	// genid: function(req) {
	//   return genuuid() // use UUIDs for session IDs
	// },
	cookie: { maxAge: SESS_LIFETIME },
	saveUninitialized: false,
	resave: false,
	secret: 'stig'
}))

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

app.listen( PORT || 3000 , () => {
    console.log('Pro-Manager back-end is live on port '+PORT+'!');
});
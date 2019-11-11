const express 		= require('express');
const mysql 		= require('mysql');
const bodyParser 	= require('body-parser');
const dotenv		= require('dotenv');
var cors 			= require('cors');
const verifyToken 	= require('./verifyToken');

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

// FIX FOR CORS ERROR
app.use(cors());

// mount routers
// all routes in the auth will be pre-pended with '/api/auth' 
app.use('/api/auth', auth);
app.use('/api/auth/jwt', verifyToken, auth);

// all routes in the tasksRouter will be pre-pended with '/api/tasks' 
app.use('/api/tasks', verifyToken, tasksRouter);

// all routes in the userRouter router will be pre-pended with '/api/users' 
app.use('/api/users', verifyToken, userRouter);

// all routes in the proRouter router will be pre-pended with '/api/projects' 
app.use('/api/projects', verifyToken, proRouter);

// app.get('/', (req, res) => {
//     res.send('Welcome to Pro-Manager');
// });


app.listen( process.env.PORT || 3000 , () => {
	console.log('Pro-Manager back-end is live on port '+process.env.PORT+'!');
});

const express       = require('express');
const tasksRouter   = require('./routes/tasks');
const userRouter    = require('./routes/users');
const proRouter     = require('./routes/projects');

// conn setup 
// should probably be abstracted into own module

const app = express();

// mount router 
// all routes in the tasksRouter will be pre-pended with '/tasks' 
app.use('/tasks', tasksRouter);

// mount router 
// all routes in the userRouter router will be pre-pended with '/users' 
app.use('/users', userRouter);

// mount router 
// all routes in the proRouter router will be pre-pended with '/projects' 
app.use('/projects', proRouter);

// app.get('/', (req, res) => {
//     res.send('Welcome to Pro-Manager');
// });

app.listen('3000', () => {
    console.log('Pro-Manager back-end is live on port 3000!');
});
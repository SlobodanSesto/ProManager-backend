const express = require('express');
const mysql   = require('mysql');
const routes  = require('./routes/api');

// conn setup
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'promanager'
});

connection.connect((err) => {
    if(err) { throw err }
    console.log('Connected to db');
});

const app = express();

// init router
app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('Welcome to Pro-Manager');
});

app.listen('3000', () => {
    console.log('Pro-Manager back-end is live on port 3000!');
});
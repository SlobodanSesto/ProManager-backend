const User = require('../models/User');

exports.getUser = ((req, res) => {
    let u = new User(1, 'Bob Smith', 'email@email.com');
    res.send(u);
});
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/login', (req, res) => {
	return userController.authUser(req, res);
	// res.send(`{"status":"OK","login":"success","sid":"zof7PbhHQUEW2vGTTBenbMQWQoPoAmNg","user":{"usr_id":63,"name":"Test","surname":"Testic","email":"Test@gmail.com","getemail":0,"utc":null,"fcm":null}}`);
});

module.exports = router;
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/login', (req, res) => {
	return userController.authUser(req, res);
});

router.post('/auto-login', (req, res) => {
	return userController.authUser(req, res);
});

module.exports = router;
const express = require('express');
const router = express.Router();

const proController = require('../controllers/projectController');

router.get('/', (req, res) => {
    return proController.getProject(req, res);
});

module.exports = router;
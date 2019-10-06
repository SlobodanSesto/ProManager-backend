const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// GET users route
router.get('/', (req, res) => {
    // res.send('/users/:id PUT route');
    return userController.getUser(req, res);
});

// POST users route
// router.post('/', (req, res) => {
//     res.send('/users/ POST route');
// });

// PUT update user route
router.put('/:id', (req, res) => {
    res.send('/users/:id PUT route');
});

// DELETE user route
router.delete('/:id', (req, res) => {
    res.send('/users/:id DELETE route');
});

module.exports = router;
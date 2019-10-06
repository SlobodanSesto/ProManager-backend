const express = require('express');
const router = express.Router();

// GET projects route
router.get('/projects', (req, res) => {
    res.send('/api/projects GET route');
});

// POST add project route
router.post('/projects', (req, res) => {
    res.send('/api/projects POST route');
});

// PUT update project route
router.put('/projects/:id', (req, res) => {
    res.send('/api/projects/:id PUT route');
});

// DELETE project route
router.put('/projects/:id', (req, res) => {
    res.send('/api/projects/:id DELETE route');
});

module.exports = router;
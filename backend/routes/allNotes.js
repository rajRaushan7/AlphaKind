const express = require('express');
const router = express.Router();
const Note = require("../models/Note");
const { body, validationResult } = require('express-validator');

// Route 1: upload a new notes using : POST '/api/notes/uploadNotes'
router.get('/uploadNotes', [
    body('title', 'title should contain minimun 3 characters').isLength({ min : 3}),
    body('pdfURL', 'please enter a valid URL').isLength({ min : 5 }),
    body('semester', 'please enter a valid semester').isInt({ min : 1, max : 8}),
    body('subject', 'enter a valid subject').isLength({ min : 2 })
], async (req, res) => {
    
    // if there is an error in validation: 
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }


});

module.exports = router;
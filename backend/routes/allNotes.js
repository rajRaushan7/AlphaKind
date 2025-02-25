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

    // uploading notes
    try {
        const { title, pdfURL, semester, subject } = req.body;
        
        // If notes with same title already exists
        let notes = await Note.findOne({ pdfURL: req.body.pdfURL });
        if(notes){
            return res.status(400).send("Notes with this URL already exists");
        }
        // Saving notes to db
        const note = new Note({
            title, pdfURL, semester, subject
        });
        const saveNote = await note.save();
        if(!saveNote){
            return res.send(400).json({ error: "Internal Server Error"});
        }
        res.json(saveNote)
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
});

// Route 2: Fetch all notes using: GET 'api/notes/fetchAllNotes'
router.get('/fetchAllNotes', async (req, res) => {
    try {
        const notes = await Note.find({});
        return res.json({notes});
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error"});
    }
});

module.exports = router;
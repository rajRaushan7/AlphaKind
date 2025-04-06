import NoteContext from "./noteContext";
import { useState } from "react";

const host = "https://alphakind-backend.onrender.com";

const NoteState = (props) => {

    const noteInitial = [];
    const [notes, setNotes] = useState(noteInitial);

    // Fetch all notes ----------------------------------------------------------

    // API Call
    const getNotes = async () => {
        try {
            const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            });

            const data = await response.json();
            setNotes(data.notes);
            console.log(data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };


    // Add note ------------------------------------------------------------------
    const addNotes = async (title, semester, subject) => {
        // API Call
        const response = await fetch(`${host}/api/notes/uploadNotes`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ title, semester, subject })
        });
        // const json = await response.json();

        // frontend logic
        const newNote = {
            "_id": "67be0f825b5660766476ef42",
            "title": title,
            "pdfURL": "https://something75.com",
            "semester": semester,
            "subject": subject,
            "uploadedAt": "2025-02-25T18:44:18.904Z",
            "__v": 0
        }
        setNotes(notes.concat(newNote));
    }

    // Delete Note ----------------------------------------------------------------
    const deleteNotes = (id) => {
        const newNote = notes.filter((note) => { return note._id != id });
        setNotes(newNote);
    }

    // Edit Note ------------------------------------------------------------------
    const editNotes = async (id, title, semester, subject) => {
        //API CALL
        const response = await fetch(`${host}/api/notes/editNotes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ title, semester, subject })
        });
        const json = await response.json();

        // frontend
        const updatedNotes = notes.map((note) =>
            note._id === id ? { ...note, title, semester, subject } : note
        );
        setNotes(updatedNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNotes, editNotes, deleteNotes, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
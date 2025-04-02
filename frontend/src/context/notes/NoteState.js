import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const noteInitial = [
        {
            "_id": "67be0c7326a1ad3726dc1fe2",
            "title": "Circular Motion 2",
            "pdfURL": "https://something2.com",
            "semester": 2,
            "subject": "Physics",
            "uploadedAt": "2025-02-25T18:31:15.561Z",
            "__v": 0
          },
          {
            "_id": "67be0e1e07aaf631c058a710",
            "title": "SHM",
            "pdfURL": "https://something3.com",
            "semester": 2,
            "subject": "Physics",
            "uploadedAt": "2025-02-25T18:38:22.783Z",
            "__v": 0
          },
          {
            "_id": "67be0f825b5660d66476ef42",
            "title": "SHM",
            "pdfURL": "https://something5.com",
            "semester": 2,
            "subject": "Physics",
            "uploadedAt": "2025-02-25T18:44:18.904Z",
            "__v": 0
          }
    ]
    const [notes, setNotes] = useState(noteInitial);

    // Add note
    const addNote = (title, semester, subject) => {
        const newNote = {
            "_id": "67be0f825b5660766476ef42",
             "title": title,
             "pdfURL": "https://something5.com",
             "semester": semester,
             "subject": subjet,
             "uploadedAt": "2025-02-25T18:44:18.904Z",
             "__v": 0
        }
        setNotes(notes.concat(newNote));
    }

    // Delete Note
    const deleteNote = (id) => {
        const newNote = notes.filter((note) => { return note._id != id });
        setNotes(newNote);
    }

    // Edit Note

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            { props.children }
        </NoteContext.Provider>
    )
}

export default NoteState;
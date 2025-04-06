import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext.js";

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    // const { deleteNotes } = context;
    const { editNotes } = context;
    const { note } = props;
    return (
        <div>
            <div className="notesCard">
                <h5>{note.title}</h5>
                <p>{note.semester}</p>
                <p>{note.subject}</p>
                <i className="fa-solid fa-pen-to-square mx-2" onClick={ () =>  editNotes(note._id, note.title, note.semester, note.subject) }></i>
                console.log(note.path);
                <a href={`${note.pdfURL}`} target="_blank">Open</a>
            </div>
        </div>
    );
}

export default NoteItem;

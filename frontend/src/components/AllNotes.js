import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/notes/noteContext.js';
import NoteItem from './NoteItem';

const AllNotes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes } = context;

  useEffect(() => {
    getNotes();
  }, []); // Don't use [getNotes] – use [] only once

  return (
    <div>
      <h1>All Notes</h1>
      {notes && notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem key={note._id} note={note} />
        ))
      ) : (
        <p>No Notes Found</p>
      )}
    </div>
  );
}

export default AllNotes;
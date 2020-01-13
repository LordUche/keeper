import React, { useState } from 'react';
import Heading from './Heading';
import Footer from './Footer';
import Note from './Note';
import NoteForm from './NoteForm';

const App = () => {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevValue => [...prevValue, newNote]);
  }

  function deleteNote(noteId) {
    setNotes(prevValue => {
      return prevValue.filter((_note, index) => index !== noteId);
    });
  }

  return (
    <div>
      <Heading />
      <NoteForm onAdd={addNote} />
      {notes.map((note, index) => (
        <Note {...note} key={index} id={index} onDelete={deleteNote} />
      ))}
      <Footer />
    </div>
  );
};

export default App;

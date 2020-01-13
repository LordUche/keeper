import React, { useState } from 'react';

const NoteForm = ({ onAdd }) => {
  const [note, setNote] = useState({ title: '', content: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevValue => ({ ...prevValue, [name]: value }));
  }

  function submitNote(event) {
    event.preventDefault();
    onAdd(note);
    setNote({ title: '', content: '' });
  }

  return (
    <form>
      <input type="text" name="title" placeholder="Title" value={note.title} onChange={handleChange} />
      <textarea
        name="content"
        placeholder="Take a note..."
        rows="3"
        value={note.content}
        onChange={handleChange}
      ></textarea>
      <button onClick={submitNote}>Add</button>
    </form>
  );
};

export default NoteForm;

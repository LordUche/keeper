import React, { useState } from 'react';
import { Fab, Zoom } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const NoteForm = ({ onAdd }) => {
  const [note, setNote] = useState({ title: '', content: '' });
  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevValue => ({ ...prevValue, [name]: value }));
  }

  function submitNote(event) {
    event.preventDefault();
    onAdd(note);
    setNote({ title: '', content: '' });
    setIsExpanded(false);
  }

  function expand() {
    setIsExpanded(true);
  }

  return (
    <form className="create-note">
      {isExpanded && <input type="text" name="title" placeholder="Title" value={note.title} onChange={handleChange} />}
      <textarea
        onClick={expand}
        name="content"
        placeholder="Take a note..."
        rows={isExpanded ? 3 : 1}
        value={note.content}
        onChange={handleChange}
      ></textarea>
      <Zoom in={isExpanded}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
};

export default NoteForm;

import React from 'react';
import Heading from './Heading';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';

const App = () => {
  return (
    <div>
      <Heading />
      {notes.map(note => (
        <Note {...note} />
      ))}
      <Footer />
    </div>
  );
};

export default App;

import './App.css';
import React, { useState } from 'react';
import FlashCard from './component/FlashCard';

const data = {
  title: 'Some Title',
  description: 'Some Description',
  time: 'Some time'
}

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = () => {
    console.log(title, description);
  }

  const handleClear = () => {
    setTitle('');
    setDescription('');
  }

  return (
    <div className="App">
      <h1>Create note</h1>

      <div className="create-note-container">
        <input 
          type="text" 
          placeholder="Title" 
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}/>

        <input 
          type="text" 
          placeholder="Description" 
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}/>

        <div className='btn-container'>
          <button onClick={handleClear}>Clear</button>
          <button onClick={handleCreate}>Create</button>
        </div>
      </div>

      <div className="today-note-container">
        <FlashCard data={data}/>
      </div>
    </div>
  );
}

export default App;

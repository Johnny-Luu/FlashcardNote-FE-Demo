import './App.css';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import FlashCard from './component/FlashCard';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get')
      .then(res => {
        setCards(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleCreate = () => {
    if (title.length === 0 || description.length === 0) {
      alert('Please fill in all fields');
    } else {
      Axios.post('http://localhost:3001/api/create', {
        title: title,
        description: description,
        time: getTime(),
      }).then(() => {
        alert('Flashcard created');
        setTitle('');
        setDescription('');
      })
    }
  };

  const handleClear = () => {
    setTitle('');
    setDescription('');
  }

  const getTime = () => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = time + ' ' + date;
    return dateTime;
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
          {cards.map((card, index) => {
            return <FlashCard key={index} data={card} />
          })}
      </div>
    </div>
  );
}

export default App;

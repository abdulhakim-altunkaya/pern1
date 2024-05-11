import React, { useState } from 'react';
import axios from 'axios';

function Write() {
  const [inputText, setInputText] = useState("");
  const [message, setMessage] = useState("");

  const handleAdd = async () => {
    try {
      const response = await axios.post("http://localhost:5000/serveraddtask",{myTask: inputText} );
      //we are sending data to backend by using req.body
      setMessage(response.data);
    } catch (error) {
      console.log(error.message);
    }
    
  }

  return (
    <div>
      <input 
        className='input-field'
        type='text' 
        placeholder='Geben Sie die Aufgabe ein'
        value={inputText}
        onChange={e => setInputText(e.target.value)} />
      {"      "}
      <button className='custom-button ' onClick={handleAdd}>Add task</button> <br/>
      {message}
    </div>
  )
}

export default Write;
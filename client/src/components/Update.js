import React, { useState } from 'react';
import axios from 'axios';

function Update() {
  const [inputText, setInputText] = useState("");
  const [inputNum, setInputNum] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    try {
      const response = await axios.post("http://localhost:5000/serverupdatetask", {taskText: inputText, taskId: inputNum});
      setMessage(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <input 
        className='input-field'
        type="number" 
        placeholder='Geben Sie die Aufgabennummer ein'
        value={inputNum}
        onChange={e => setInputNum(e.target.value)} /> <br/><br/>
      <input 
        className='input-field'
        type='text' 
        placeholder='Geben Sie die NEUE Aufgabe ein'
        value={inputText}
        onChange={e => setInputText(e.target.value)} /> <br/><br/>

      <button className='custom-button ' onClick={handleUpdate}>Update task</button> <br/>
      {message}
    </div>
  )
}

export default Update
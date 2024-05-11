import React, { useState } from 'react';
import axios from 'axios';

function Delete() {

  const [inputNum, setInputNum] = useState("");
  const [message, setMessage] = useState("");

  const handleDel = async () => {
    try {
      const response = await axios.post("http://localhost:5000/serverdeletetask",{taskId: inputNum} );
      setMessage(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div>
      <input 
        className='input-field'
        type="number" 
        placeholder='Geben Sie die Aufgabennummer ein'
        value={inputNum}
        onChange={e => setInputNum(e.target.value)} />
      {"      "}
      <button className='custom-button ' onClick={handleDel}>Delete task</button> <br/>
      {message}
    </div>
  )
}

export default Delete
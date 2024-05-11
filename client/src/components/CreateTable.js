import React, { useState } from 'react';
import axios from 'axios';

function CreateTable() {

  const [message, setMessage] = useState("");
  
  const handleCreate = async () => {
    try {
      const response = await axios.get("http://localhost:5000/servercreatetable")
      setMessage(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <div>
      <button className='custom-button ' onClick={handleCreate}>Create Table</button> {"      "}
      {message}
    </div>
  )
}

export default CreateTable
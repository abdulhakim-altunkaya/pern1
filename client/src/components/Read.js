import React, { useState } from 'react';
import axios from "axios";

function Read() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const handleDisplay = async () => {
    try {
      const response = await axios.get("http://localhost:5000/servergettasks");
      setTasks(response.data); // Set retrieved tasks in state
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setError('Error fetching tasks');
    }
  }
  
  return (
    <div>
      <div>
        {/* Display tasks */}
        {tasks.map(task => (
          <div key={task.id}>{task.description}</div>
        ))}
        {/* Display error message if any */}
        {error && <p>{error}</p>}
      </div>
      <button className='custom-button' onClick={handleDisplay}>DISPLAY TASKS</button> <br/>
    </div>
  )
}

export default Read;

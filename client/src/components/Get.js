import React, { useState, useEffect } from 'react';
import axios from "axios";

function Get() {

  const [serverData, setServerData] = useState("");
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/readfromserver");
        const myData1 = response.data.myMessage;
        setServerData(myData1);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [])
  
  return (
    <div>{serverData}</div>
  )
}

export default Get;
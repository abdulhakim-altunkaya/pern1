const express = require("express");
const app = express();

const { supabase, pool } = require('./db'); // Import the connection

//we need cors middleware because frontend and backend run on different ports
const cors = require("cors");
app.use(cors());

//Take json data in req.body and converts it into JS object so that our backend can work with it. 
//For now, we dont have req.body but we might use it. 
//extended false means dont deal with anything more advanced than basic objects and arrays
app.use(express.json({extended: false}))

app.get("/readfromserver", (req, res) => {
  res.json({myMessage: "Hey from server"});
})

app.get("/servercreatetable", async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS aufgaben (
        id SERIAL PRIMARY KEY,
        description TEXT
      )
    `);
    console.log("table created successfully");
  } catch (error) {
    console.log(error.message);
  } finally {
    client.release();
  }
})


const PORT = process.env.PORT ||5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
})
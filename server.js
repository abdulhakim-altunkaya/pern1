const express = require("express");
const app = express();

//we need cors middleware because frontend and backend run on different ports
const cors = require("cors");
app.use(cors());

//Take json data in req.body and converts it into JS object so that our backend can work with it. 
//For now, we dont have req.body but we might use it. 
//extended false means dont deal with anything more advanced than basic objects and arrays
app.use(express.json({extended: false}))

app.get("/readfromserver", (req, res) => {
    res.json({message: "Hey man from server"});
})

const PORT = process.env.PORT ||5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
})
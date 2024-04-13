const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
// express.json() parses json data inside the req.body
//in other words, it takes json data in req.body and  data inside  req.body
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello dude")
});

app.listen(5000, () => {
  console.log("server on 5000");
})
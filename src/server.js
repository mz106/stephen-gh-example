const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world from the get request!");
});

app.listen(5002, () => console.log("Server is listening"));

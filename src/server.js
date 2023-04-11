const express = require("express");

const app = express();

app.use(express.json());

app.listen(5002, () => console.log("Server is listening"));

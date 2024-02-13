const express = require("express");
const cors = require("cors");
const connectToMongo = require("./db");
// const bodyparser = require("body-parser");
var cookieParser = require('cookie-parser');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

connectToMongo();

app.use("/auth", require("./routes/auth"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port, ${PORT}`);
});
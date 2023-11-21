// server instantiate
const express = require("express");
const app = express();

// to load data into process object we need ("dotenv").config();
// load config from env file
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// parsing
app.use(express.json());

// routes
const todoRoutes = require("./routes/todo");

// mounting "/api/v1" on route
app.use("/api/v1", todoRoutes);

// start server
app.listen(PORT, () => {
  console.log(`server started successfully at ${PORT}`);
});

// db conection
const dbConnect = require("./config/database")
dbConnect();


// default route
app.get('/' , (req, res) => {
    res.send(`<h1>This is HomePage</h1>`)

})
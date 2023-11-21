
const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

// parsing
app.use(express.json());

// routes
const todoRoutes = require("./routes/todo");

app.use("/api/v1", todoRoutes);

// start server
app.listen(PORT, () => {
  console.log(`server started successfully at ${PORT}`);
});

const dbConnect = require("./config/database")
dbConnect();

app.get('/' , (req, res) => {
    res.send(`<h1>HomePage</h1>`)

})
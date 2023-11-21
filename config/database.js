const mongoose = require("mongoose");

require("dotenv").config();

// db connect to express
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connction Success"))
    .catch((error) => {
      console.log("Connction error");
      console.error(error.message);
      process.exit(1);
    });
};


module.exports = dbConnect;
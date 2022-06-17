const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });
DATAB = process.env.EMPLOYEE;

mongoose
  .connect(DATAB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("EMPLOYEE DATABASE CONNECTED SUCCESSFULLY");
  })
  .catch((error) => {
    console.log(error.message);
  });

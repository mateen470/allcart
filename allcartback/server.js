const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const router = require("./Routes/route");

require("./Db/connection");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(router);
app.use(cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
  
}));

app.get("/", (req, res) => {
  res.send("server started");
});

app.listen(PORT, () => {
  console.log(`THE SERVER HAS STARTED ON http://localhost:${PORT}`);
});

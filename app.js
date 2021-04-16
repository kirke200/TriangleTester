const express = require("express");
const cors = require("cors");
const app = express();
const triangleRoutes = require("./routes/triangleRoutes")

app.use(express.json());
app.use(cors());

app.use("/", triangleRoutes);

module.exports = app;
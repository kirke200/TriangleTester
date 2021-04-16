const express = require("express");
const cors = require("cors");
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const triangleRoutes = require("./routes/triangleRoutes")

app.use(express.json());
app.use(cors());

app.use("/", triangleRoutes);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
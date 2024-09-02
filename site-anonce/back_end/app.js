const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/AuthRoute");
const marqueRoutes = require("./routes/MarqueRoute");
const cors = require("cors");
const { verifyToken } = require("./middleware/AuthMiddleware");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

app.use("/api/marques", verifyToken, marqueRoutes);

app.use((req, res) => {
  console.error(`Not found: ${req.path}`);
  res.status(404).json({
    message: "Route not found",
  });
});

app.use((err, req, res, next) => {
  console.error(`FATAL ERROR: ${req.path}`);
  console.error(err);
  res.status(500).json({
    message: "Internal server error",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

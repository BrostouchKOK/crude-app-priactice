const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const dotenv = require("dotenv");
const userRouter = require("./routes/user.route");
const db = require("./config/db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Router
app.use("/api", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

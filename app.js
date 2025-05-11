require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth");
const spotifyRouter = require("./routes/spotify");

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/spotify", spotifyRouter);

module.exports = { app };

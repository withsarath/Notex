import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Sever is up and running...");
});

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on ", PORT);
  });
});
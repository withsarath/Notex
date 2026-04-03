import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db";
import noteRoutes from "./routes/noteRoutes"
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/notes", noteRoutes)
app.get("/", (req, res) => {
  res.send("Sever is up and running...");
});

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on ", PORT);
  });
});
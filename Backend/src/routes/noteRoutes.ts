import express from "express";
import { createNote, deleteNote, getAllNotes, getNote, updateNote } from "../controllers/noteController";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNote);
router.post("/", createNote);
router.patch("/:id", updateNote);
router.delete("/:id", deleteNote);


export default router;
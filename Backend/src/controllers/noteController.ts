import { Request, Response } from "express";
import * as NoteService from "../services/noteServices";

type Params = {
 id: string;
}
type NoteBody = {
    title: string,
    content: string
}

export const getAllNotes = async (req: Request, res: Response) => {
  try {
    const notes = await NoteService.getAllNotes();
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNote", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const getNote = async (req: Request<Params>, res: Response) => {
  try {
    const { id } = req.params;
    const note = await NoteService.getNoteById(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error("Error in getNote", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const createNote = async (req:  Request<{}, {}, NoteBody>, res: Response) => {
  try {
    if (!req.body.title || !req.body.content) {
       return res.status(400).json({ message: "Missing title and content" });
    }
    const note = await NoteService.createNote(req.body);
    res.status(201).json(note);
  } catch (error) {
    console.error("Error in createNote", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const updateNote = async (req: Request<Params>, res: Response) => {
  try {
    const { id } = req.params;
    const updatednote = await NoteService.updateNote(id, req.body);
    if (!updatednote) {
       return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(updatednote);
  } catch (error) {
    console.error("Error in updateNote", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const deleteNote = async (req: Request<Params>, res: Response) => {
  try {
    const { id } = req.params;
    const deletedNote = await NoteService.deleteNote(id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res.status(204).send();
  } catch (error) {
    console.error("Error in deleteNote", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

import Note from "../models/Note";

export const createNote = async (data: { title: string; content: string }) => {
  const note = new Note(data);
  await note.save();
};

export const getAllNotes = async () => {
  return await Note.find().sort({ createdAt: -1 });
};

export const getNoteById = async (id: string) => {
  return await Note.findById(id);
};

export const updateNote = async (
  id: string,
  data: {
    title: string;
    content: string;
  },
) => {
  const updatedNote = await Note.findByIdAndUpdate(
    id,
    { title: data.title, content: data.content },
    { new: true },
  );
  if (!updatedNote) {
    throw new Error("Note not found!");
  }
  return updatedNote;
};
export const deleteNote = async (id: string) => {
  return await Note.findByIdAndDelete(id);
};

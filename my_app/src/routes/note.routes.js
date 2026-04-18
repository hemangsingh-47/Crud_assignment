const express = require("express");
const { 
  createNote, 
  createBulkNotes, 
  getAllNotes, 
  getNoteById,
  updateNote,
  patchNote,
  deleteNote,
  deleteBulkNotes 
} = require("../controllers/note.controller");

const router = express.Router();

router.post("/", createNote);
router.post("/bulk", createBulkNotes);

router.get("/", getAllNotes);
router.get("/:id", getNoteById);

router.put("/:id", updateNote);
router.patch("/:id", patchNote);

router.delete("/bulk", deleteBulkNotes);
router.delete("/:id", deleteNote);

module.exports = router;
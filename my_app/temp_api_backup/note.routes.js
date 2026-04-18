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

// CREATE
router.post("/", createNote);
router.post("/bulk", createBulkNotes);

// READ
router.get("/", getAllNotes);
router.get("/:id", getNoteById);

// UPDATE
router.put("/:id", updateNote);     // full replace
router.patch("/:id", patchNote);   // partial update

// DELETE
router.delete("/bulk", deleteBulkNotes);
router.delete("/:id", deleteNote);

module.exports = router;
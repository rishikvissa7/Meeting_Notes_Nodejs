// // const express = require("express");
// // const Notes = require("../models/Meeting");
// // const router = express.Router();
// // const { getNotes, getNote, getNotesbytitle, createNotes, updateNotes, deleteNotes } = require('../controllers/Meeting.controller.js');

// // // Route to get all notes
// // router.get('/', getNotes);

// // // Route to get a note by ID
// // router.get("/:id", getNote);

// // // Route to filter notes by title using query parameters
// // // router.get("/searchByTitle", getNotesbytitle);
// // router.get("/searchByTitle", getNotesbytitle);


// // // Route to create a new note
// // router.post("/", createNotes);

// // // Route to update a note by ID
// // router.put("/:id", updateNotes);

// // // Route to delete a note by ID
// // router.delete("/:id", deleteNotes);

// // module.exports = router;

// const express = require("express");
// const router = express.Router();
// const { getNotes, getNote, getNotesbytitle, createNotes, updateNotes, deleteNotes } = require('../controllers/Meeting.controller.js');

// // Route to get all notes
// router.get('/', getNotes);

// // Route to get a note by ID
// router.get("/:id", getNote);

// // Route to filter notes by title using query parameters
// router.get("/searchByTitle", getNotesbytitle);

// // Route to create a new note
// router.post("/", createNotes);

// // Route to update a note by ID
// router.put("/:id", updateNotes);

// // Route to delete a note by ID
// router.delete("/:id", deleteNotes);

// module.exports = router;

const express = require("express");
const router = express.Router();
const { getNotes, getNote, getNotesbytitle, createNotes, updateNotes, deleteNotes } = require('../controllers/Meeting.controller.js');

// Route to get all notes
router.get('/', getNotes);

// Route to filter notes by title using query parameters
// This specific route should come before the "/:id" route
router.get("/searchByTitle", getNotesbytitle);

// Route to get a note by ID
router.get("/:id", getNote);

// Route to create a new note
router.post("/", createNotes);

// Route to update a note by ID
router.put("/:id", updateNotes);

// Route to delete a note by ID
router.delete("/:id", deleteNotes);

module.exports = router;
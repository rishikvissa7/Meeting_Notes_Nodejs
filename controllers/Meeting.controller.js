const Notes = require("../models/Meeting");


// get all notes
const getNotes = async (req,res) => {
    try {
        const notes = await Notes.find({});
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};


// create notes
const createNotes = async (req,res) => {
    try {
        const note = await Notes.create(req.body);
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};


//get notes by id
const getNote = async(req,res) => {
    try {
        const { id } = req.params;
        const note = await Notes.findById(id);
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// update notes by id

const updateNotes = async (req,res) => {
    try {
        const { id } = req.params;
        const note = await Notes.findByIdAndUpdate(id, req.body);

        if(!note) {
            return res.status(404).json({message: "Note not found"});
        }
        const updatedNotes = await Notes.findById(id);
        res.status(200).json(updateNotes);
    } catch (error) {
        res.status(200).json({message: error.message});
    }
};

//delete notes by id

const deleteNotes = async(req,res) => {
    try {
        const { id } = req.params;

        const note = await Notes.findByIdAndDelete(id);

        if(!note) {
            return res.status(404).json({mesaage: "Note not found"});
        }
        res.status(200).json({message: error.message});
    } catch (error) {
        res.status(200).json({message: error.message});
    }
};

// filter by title

const getNotesbytitle = async (req, res) => {
    try {
        // Extract the title from query parameters
        const { title } = req.query;

        // Check if title is provided
        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }

        // Create a filter object for case-insensitive regex search
        const filter = {
            title: { $regex: title, $options: 'i' }
        };

        // Find notes that match the filter
        const notes = await Notes.find(filter);

        // Check if any notes are found
        if (notes.length === 0) {
            return res.status(404).json({ message: "No notes found with the specified title" });
        }

        // Send the matching notes as a JSON response
        res.status(200).json(notes);
    } catch (error) {
        // Handle any errors that occur
        res.status(500).json({ message: error.message });
    }
};





module.exports = {getNotes,getNote,createNotes,updateNotes,deleteNotes,getNotesbytitle};
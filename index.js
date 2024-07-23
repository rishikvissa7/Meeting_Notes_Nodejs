const express = require("express");
const mongoose = require("mongoose");
const Notes = require("./models/Meeting.js");
const notesRoute = require('./routes/Meeting.routes.js');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/notes", notesRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose.connect("mongodb://localhost:27017/")
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });

})
.catch(() => {
  console.log("Connection failed");  
})
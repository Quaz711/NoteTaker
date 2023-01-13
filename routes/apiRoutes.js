const fs = require("fs"); //Provides utilities for working with file systems on the computer
const path = require("path"); //Provides utilites for working with path and directories
const router = require("express").Router(); //Provides endpoint responses to client requests
let data = require("../db/db.json"); //Puts the database into a constant to be utlized elsewhere
const {v4:uuidv4} = require("uuid"); //Used to generate a unique id for each note stored

router.get("/notes", function (req, res) { //Request data from /notes when called uppon
    res.json(data); //Sends a JSON response with the database information
});

router.post("/notes", function (req, res) { //Posts data from /notes when called uppon
    let newNote = req.body; //Stores the user input into a variable
    newNote.id = uuidv4(); //Creates a unique id for the information the user is storing
    data.push(newNote); //Adds the new information the user inputed into the database
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(data));
    console.log("Note was added."); //Lets user know a note was added on the console
    res.json(data); //Sends a JSON response with the database information
});

router.delete("/notes/:id", function (req, res) { //Deletes data from /notes when called uppon using the unique id
    let noteID = req.params.id; //Stores the unique id into a variable to be used later on
    let newInfo = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"))); //Reads the database and loads it into a variable
    data = newInfo.filter(notes => notes.id !== noteID); //Filters through the database and finds the information pertaining the unique id passed in and stores that information
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(data)); //Rewrites the database after the selected id information was taken out
    console.log("Note was deleted."); //Lets user know a note was deleted on the console
    res.json(data); //Sends a JSON response with the database information
});

module.exports = router; //Exports the module to be utilzed elsewhere
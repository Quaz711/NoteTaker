const fs = require("fs");
const path = require("path");
const data = require("../db/db.json");
const {v4:uuivd4} = require("uuid");

module.exports = apply => {
    apply.get("/api/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../db/db.json"))
        //res.json(data);
    });

    apply.post("/api/notes", function (req, res) {
        let newNote = req.body;
        newNote.id = uuidv4();
        data.push(newNote);
        fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(data));
        res.json(data);
    });

    apply.delete("/api/notes/:id", function (req, res) {
        let noteID =req.params.id;
        const newInfo = data.filter(note => note.id !== noteID);
        fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(newInfo));
        console.log("Note was deleted.");
        res.json(newInfo);
    });
};
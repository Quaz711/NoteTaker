const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const data = require("../db/db.json");
const {v4:uuidv4} = require("uuid");
console.log("being read");
//module.exports = apply => {
    router.get("/notes", function (req, res) {
        //res.sendFile(path.join(__dirname, "../db/db.json"))
        /*fs.readFile("../db/db.json").then((result) => {
            console.log(result);
            res.json(result);
        });*/
        //console.log("Note was retrieved.");
        //console.log(data);
        res.json(data);
    });

    router.post("/notes", function (req, res) {
        let newNote = req.body;
        newNote.id = uuidv4();
        data.push(newNote);
        fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(data));
        console.log("Note was added.");
        res.json(data);
    });

    router.delete("/notes/:id", function (req, res) {
        let noteID = req.params.id;
        const newInfo = data.filter(note => note.id !== noteID);
        fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(newInfo));
        console.log("Note was deleted.");
        //const result = fs.readFileSync(path.join(__dirname, "../db/db.json"), 'utf8');
        console.log(newInfo);
        res.json(newInfo);
    });
//};

module.exports = router;
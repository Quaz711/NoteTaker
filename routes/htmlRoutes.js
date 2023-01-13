const path = require("path"); //Provides utilites for working with path and directories
const router = require("express").Router(); //Provides endpoint responses to client requests

router.get('/', function (req, res) { //Request data from / when called uppon
    res.sendFile(path.join(__dirname, '../public/index.html')); //Pulls data from the index.html
});

router.get("/notes", (req, res) => { //Request data from /notes when called uppon
    res.sendFile(path.join(__dirname, '../public/notes.html')); //Pulls data from the notes.html
});

module.exports = router; //Exports the module to be utilzed elsewhere
const path = require("path");
const data = require("../db/db.json");

module.exports = app => {
    app.get("/notes", function (req, res) {
        res.json(data);
    });

    app.get("*", (req, res) => {
        res.json(data);
    });
};
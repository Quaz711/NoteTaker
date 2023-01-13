const express = require("express"); //A Node package to be able to handle http routes
const htmlRoutes = require("./routes/htmlRoutes"); //Stores the htmlRoutes.js into a variable to be used elsewhere
const apiRoutes = require("./routes/apiRoutes"); //Stores the apiRoutes.js into a variable to be used elsewhere
const app = express(); //Turns the express module into a function and stores it into a variable to be used elsewhere
const PORT = process.env.PORT || 3001; //Stores the desired port to be used on the local computer into a variable to be used elsewhere

app.use(express.urlencoded({extended:true})); //Built in middleware that express has as a function
app.use(express.json()); //Parses the incoming JSON requests and puts the data into req
app.use(express.static("public")); //Built in middleware that express uses to access anything in the public folder
app.use("/", htmlRoutes); //Pulls data from the htmlRoutes.js when accessing / route
app.use("/api", apiRoutes); //Pulls data from the apiRoutes.js when accessing /api route

app.listen(PORT, function () { //Function that listens for an open port
    console.log(`PORT: ${PORT} is being utilized.`); //Lets user know a port and which port is being used on the console
});
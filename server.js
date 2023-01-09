const express = require("express");
const htmlRoutes = require("./Develop/routes/htmlRoutes");
const apiRoutes = require("./Develop/routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, function () {
    console.log(`PORT: ${PORT} is being utilized.`)
});
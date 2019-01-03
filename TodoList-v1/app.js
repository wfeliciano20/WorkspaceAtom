//jshint esversion: 6

const express = require("express");

const bodyParser = require("body-parser");

const request = require("request"); // use to do a request to an external server

const app = express();

app.use(bodyParser.urlencoded({

    extended: true

}));

app.use("view engine", "ejs");

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {


});

app.listen(3000, function() {

    console.log("server is running on port 3000");

});
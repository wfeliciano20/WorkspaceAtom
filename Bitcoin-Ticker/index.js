//jshint esversion: 6

const express = require("express");

const bodyParser = require("body-parser");

const app = espress();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, req) {

    res.sendFile(__dirname + "/index.html");

})

app.listen(3000, function() {

    console.log("server is running on port 3000");

});
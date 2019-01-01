//jshint esversion: 6

const express = require("express");

const bodyParser = require("body-parser");

const request = require("request"); // use to do a request to an external server

const app = espress();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {

    let url = "https://apiv2.bitcounaverage.com/indices/global/ticker/BTCUSD";

    request("url", function(error, response, body) {

        console.log(body);


    });

});

app.listen(3000, function() {

    console.log("server is running on port 3000");

});
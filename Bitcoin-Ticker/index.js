//jshint esversion: 6

const express = require("express");

const bodyParser = require("body-parser");

const request = require("request"); // use to do a request to an external server

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {

    let crypto = req.body.crypto;

    let fiat = req.body.fiat;

    let url = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";

    let finalURL = url + crypto + fiat;

    request(finalURL, function(error, response, body) {

        let data = JSON.parse(body);

        let price = data.last;

        let currentDate = data.display_timestamp;

        res.write("<p>The current date is " + currentDate + "</p>");

        res.write("<h1>The current price of " + crypto + " is " + price + " " + fiat + "</h1>");

        res.send();

    });

});

app.listen(3000, function() {

    console.log("server is running on port 3000");

});
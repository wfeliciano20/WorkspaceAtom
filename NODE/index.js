//jshint esversion:6

console.log("Hello NODE");

const fs = require("fs");

fs.copyFileSync("file.txt", "fileCopy.txt");
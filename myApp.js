var express = require('express');
var app = express();
require('dotenv').config().

console.log ("Hello World")

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });
  
  app.use("/public", express.static(__dirname + "/public"));
  

app.get("/json", function(req, res) {
    res.json(
      {message: "Hello json"}
    );
  });
  
  var response = "Hello World".toUpperCase(); // now becomes "HELLO WORLD"
  
  if (process.env.MESSAGE_STYLE === "allCaps") {
    response = "Hello World".toUpperCase();
  } else {
    response = "Hello World";
  }




































 module.exports = app;

var express = require('express');
var app = express();

/* 7 Implement a Root-Level Request Logger Middleware */ 
app.use(function (req, res, next) {
  console.log(req.method + "" + req.path + " - " + req.ip)
  // Call the next function in line:
  next();
});


console.log ("Hello World")

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });
  
  app.use("/public", express.static(__dirname + "/public"));
  
/* 6 USE THE .ENV FILE */ 
app.get("/json", function(req, res) {
    var jsonResponse = { "message": "Hello json" };
    
  if (process.env.MESSAGE_STYLE === "uppercase") {
    jsonResponse.message = jsonResponse.message.toUpperCase()
  }

  res.json(jsonResponse);
});


  




































 module.exports = app;

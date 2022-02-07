var express = require('express');
var app = express();

/* 7 - Implement a Root-Level Request Logger Middleware */ 
app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip)
  next();
});


console.log ("Hello World")

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });
  
  app.use("/public", express.static(__dirname + "/public"));
  
/* 6 - USE THE .ENV FILE */ 
app.get("/json", function(req, res) {
    var jsonResponse = { "message": "Hello json" };
    
  if (process.env.MESSAGE_STYLE === "uppercase") {
    jsonResponse.message = jsonResponse.message.toUpperCase()
  }

  res.json(jsonResponse);
});

/* 8 - Chain Middleware to Create a Time Server */ 

function currentTieString() {
  return new Date().toString();
}

app.get("/now", function(req, res, next) {
  req.time = currentTieString();
  next();
}, function(req, res) {
  res.json({ time: req.time });
})

/* 9 - Get Route Parameter Input from the Client */

app.get("/:word/echo", function(req, res) {
  const { word } = req.params;
  res.json({
    echo: word
  });
}); 


  




































 module.exports = app;

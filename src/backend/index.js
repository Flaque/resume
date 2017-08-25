var express = require("express");
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function(req, res) {
  res.json({
    message: "Hello, I am from the server."
  });
});

app.listen(4000, function() {
  console.log("Backend server ready to go on port 4000!");
});

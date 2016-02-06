// Create a 3 page website
// Home
// Register
// Dashboard
// Include jQuery (not from CDN)
// Include Bootstrap (not from CDN)
// Create a navbar
// In the navbar, have a login link. Clicking login should open a bootstrap modal that has an email and password field (and button)
// Make this look good!
// On the Registration form, use JavaScript / jQuery to ensure all fields are filled out before POSTing the form

var express = require('express');
var app = express();
var PORT = 8090;

app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/register", function(req, res) {
  res.sendFile(process.cwd() + "/views/register.html");
});

app.get("/dashboard", function(req, res) {
  res.sendFile(process.cwd() + "/views/dashboard.html");
});

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});
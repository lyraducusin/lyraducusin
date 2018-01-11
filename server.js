//express connection
var express = require("express");
var app = express();
//connect pg folder
var pg = require("pg");
var bodyParser = require("body-parser");

//this app is directing to public folder
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());


var server = app.listen(5000, function(req, res) {
  console.log("Server is running");
});

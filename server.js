//express connection
var express = require("express");
var app = express();
var nodemailer = require(“nodemailer”);
//connect pg folder
var pg = require("pg");
var bodyParser = require("body-parser");

//this app is directing to public folder
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.post("/email", function(req, res){
  var stuff = req.body;
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'lyraducusin@gmail.com',
      pass: 'lyrajasmine'
    }
  });


var server = app.listen(5000, function(req, res) {
  console.log("Server is running");
});

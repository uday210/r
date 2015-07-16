//var MongoClient = require('mongodb').MongoClient;
var http = require('http'),
    fs = require('fs');
	


var port = process.env.PORT || 8080;

var express = require("express");
var app     = express();
var path    = require("path");

app.use('/images',express.static(__dirname + '/images'));


app.get('/*',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});



app.listen(port);

console.log("Running at Port :"+port);
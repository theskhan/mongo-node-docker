'use strict';

const express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.99.100:27111/peoples');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We are connected to mongo!!");
});


// Constants
const PORT = 9000;

// App
const app = express();
app.get('/', function (req, res) {
	
	var kittySchema = mongoose.Schema({
		name: String
	});	
	
	var Kitten = mongoose.model('Kitten', kittySchema);
	var silence = new Kitten({ name: 'Silence' });
	var fluffy = new Kitten({ name: 'fluffy' });
	
	fluffy.save(function (err, fluffy) {
	  if (err) return console.error(err);	  
	});
	
  res.send('sdfsdf asd as dsaddchanged \n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
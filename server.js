var express = require('express'),
	wines = require('./routes/wines'),
	database = require('./dbconnection');

var app = express();
var db = database.connect();

app.configure(function(){
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
})

app.use(express.static('./public'));
app.get('/wines', wines.findAll(db));
app.get('/wines/:id', wines.findById(db));
app.post('/wines', wines.addWine(db));
app.put('/wines/:id', wines.updateWine(db));
app.delete('/wines/:id', wines.deleteWine(db));

app.listen(3000);
console.log('Welcome FreshMeister\nI\'m listening on port 3000...')
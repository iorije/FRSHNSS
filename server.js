var express = require('express'),
	posts = require('./routes/posts'),
	users = require('./routes/users'),
	database = require('./dbconnection');

var app = express();
var db = database.connect();

app.configure(function(){
	app.use(express.logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded());
})

app.use(express.static('./public'));

app.get('/users', users.findAll(db));
app.get('/users/:id', users.findById(db));
app.post('/users', users.add(db));
app.put('/users/:id', users.update(db));
app.delete('/users/:id', users.delete(db));

app.get('/posts', posts.findAll(db));
app.get('/posts/:id', posts.findById(db));
app.post('/posts', posts.add(db));
app.put('/posts/:id', posts.update(db));
app.delete('/posts/:id', posts.delete(db));

app.listen(3000);
console.log('Server: started on port 3000.');
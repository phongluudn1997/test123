var express = require ('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hello World')
})

app.get('/user', function(req, res){
	res.send('This is User Page')
})

const port = process.env.PORT || 3000;
app.listen(port);
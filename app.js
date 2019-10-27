var express = require('express'),
	app = express();

app.get('/', function(req, res){
	res.send("hello world");
});


app.listen(process.env.PORT, process.env.IP)

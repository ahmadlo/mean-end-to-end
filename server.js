//console.log('hello from node');
var express = require('express'),
	app		= express();
app.get('/',function (req,res) {
	// body...
	res.sendfile(__dirname + '/client/views/index.html');
});
app.listen(3000, function () {
	// body...
		console.log('I\'m Listening.....');
})
//console.log('hello from node');
var express = require('express'),
	app		= express();
app.get('/',function (req,res) {
	// body...
	res.sendfile(__dirname + '/client/views/index.html');
});
app.use('/js',express.static(__dirname + '/client/js'));
app.listen(3000, function () {
	// body...
		console.log('I\'m Listening.....');
})
const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const server = require('http').createServer(app).listen(port);

app.get('/', function (req, res) {
	res.sendFile(path.resolve(__dirname + '/dist/index.html'));
});
app.use(express.static(path.resolve(__dirname + '/dist')));

console.log(`Server started at http://localhost:${server.address().port}`);

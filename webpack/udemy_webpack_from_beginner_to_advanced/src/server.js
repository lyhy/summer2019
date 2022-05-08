const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('/hello-world', function(req, res){
	const pathToHtmlFile = path.resolve(__dirname, '../dist/hello-world.html');
	const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8')
	res.send(contentFromHtmlFile)
});

app.get('/kiwi', function(req, res){
	const pathToHtmlFile = path.resolve(__dirname, '../dist/kiwi.html');
	const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8')
	res.send(contentFromHtmlFile)
});

app.listen(3000, function(){
	console.log('app running under http://localhost:3000')
})
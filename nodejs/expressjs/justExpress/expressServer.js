const path = require('path');

// http is a native module
// const http = require('http');
// express is a 3rd party module
const express = require('express');
// An "app" is the express function (createAppliction inside the Express module)
// invoked and is an Express appliction
const app = express();

// serve up static files! Only 1 line... take that nodejs
app.use(express.static('public'))

// all is a method, and it takes 2 args:
// 1. route
// 2. callback to run if the route is requested
app.all('/',(req, res)=>{
    console.log(req.socket.remoteAddress)
    // Express handles the basic headers (status code, mime-type)! Awesome!
    // read in Node.html
    console.log(path.join(__dirname + '/node.html'))
    res.sendFile(path.join(__dirname + '/node.html'))
    // res.send(`<h1>This is the home page</h1>`)
    // Express handles the end! Awesome!
});

app.all('*',(req, res)=>{
	res.send(`<h1>404 page</h1>`)

});

app.listen(3000)
console.log("The server is listening on port 3000...")











//---------old way
// const http = require('http');
// const server = http.createServer((req, res) => {
// 	const url = req.url;
// 	if(url === '/') {
// 		res.writeHead(200, {'content-type': 'text/html'})
// 		res.write('<h1>home page</h1>');
// 		res.end()
// 	}else {
// 		res.writeHead(200, {'content-type': 'text/html'})
// 		res.write('<h1>sorry, no page</h1>');
// 		res.end()
// 	}

	
// })


// server.listen(3000);
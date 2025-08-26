const path = require('path');
const FinishMiddleware = require('./finishMiddleware').FinishMiddleware;
const express = require('express');
const app = express();


app.use(express.static('public'));
app.use(FinishMiddleware);

app.get('/error', (req, res) => {
    throw new Error('BROKEN')
  })

  app.get('/json', (req, res) => {
    res.json({
        name: 'wj'
    })
  })

  app.get('/longwait', (req, res)=> {
    setTimeout(() => {
        // Send response after 5 seconds
        console.log(req.query.name);
        console.log('destroyed',res.status().destroyed);
        res.send('Data will be available after 5 seconds');
      }, 5000); // Delay the response for 5 seconds
  })


app.all('/',(req, res)=>{
    res.send(`<h1>This is the home page</h1>`);
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
const express = require('express');
const app = express();
const helmet = require('helmet')

app.use(helmet())

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}));

// 1. static
// 2. json
// 3. urlencoded

app.post('/ajax/:name',(req, res)=>{
    console.log(req.query)
    console.log(req.params)
    console.log(req.body);
    res.json(["Test",1])
});

app.listen(3000);
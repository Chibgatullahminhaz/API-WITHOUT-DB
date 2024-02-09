const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const routers  = require('./routers/routers');
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use('/users',routers);
// create home routers
app.get('/',(req,res)=>{
    res.status(202).sendFile(__dirname + "/views/index.html")
})
app.use((req,res,next)=>{
    res.status(404).send('Page not fond')
})

app.use((err,req,res,next)=>{
    res.status(500).send(err.message)
})
module.exports= app;
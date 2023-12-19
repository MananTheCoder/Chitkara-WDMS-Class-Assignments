const express = require('express');
const path = require('path'); // path library import 
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.sendFile(path.join( __dirname,'public/index.html'));
});

app.listen(port,()=>{
    console.log("I am Listing on 4000");
});    
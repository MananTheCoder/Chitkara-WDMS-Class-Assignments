const express = require('express');
const app = express();

app.get('/',(req,req)=>{
    res.send("Welcome to India");
});

app.listen(4000,()=>{
    console.log("I am Listing on 4000");
});
const express = require('express') 
const path = require('path');
const app = express() // instance of express as app
const port = 3000

app.get('/', (req, res) => { // get is the command for restful api.
  res.sendFile(path.join( __dirname,'index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

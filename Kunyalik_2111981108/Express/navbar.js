const express = require('express')
const app = express()
const port = 3000
const path=require('path')

app.get('/', (req, res) => {

 res.sendFile(path.join(__dirname,'navbar.html'))
})

app.listen(port, () => {
  console.log(`We are attaching bootstrap ${port}`)
})

const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');


app.get('/', (req, res) => {
  res.sendFile("./views/home.html" , {root:__dirname})
})


mongoose.connect('mongodb+srv://mersalhussin:mbaCbBcy17CMYdbz@mersalhussin.oeujrem.mongodb.net/all-data?retryWrites=true&w=majority&appName=MersalHussin')
.then( () => {app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})
})
.catch( (err) => {
  console.log("error 1")
})
require('dotenv').config() // this is necessary as it imports the modules for the .env package, allowing us to use it
const express = require('express') // newer form of importing express module
// import express from 'express' // older form of importing express module


const app = express() // this app variable holds a lot of strength as it has the ability to create lot of functionalities etc...
const port = process.env.PORT // in your system, you can use which ever port you want(whichever is free),
/*
*Remember the port you have free might not be free in other people's system, so if you want them to have accessibility to your application
then while deployment, you need to add config of port to the deployment service so that any port of an users system can be used(which are free), 
and the defaults ones can be overidden if necessary.

Ideally even while working in your system it is better if you declare your PORT in to an environment variable, so that while pushing to git, 
it won't be accessible to everyone
*/ 

// sending a response to the server port using app.get()
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/reverse', (req, res) => {
  res.send('<h2>World hello!</h2>')
})

// listening on a specific port for any incoming msg, listening on this port for any app.get() calls
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
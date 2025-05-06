console.log("Application is starting");
 
const express = require('express') // Importing express library
const ejs = require('ejs')
const app = express() // Creating an instance of express application
const port = 3000
 
app.get("/", (req, res, next) => {
    console.log("I received a get request on the path // ")
    res.send('<h2 style="color:blue;">This is the app root</h2>')
})
  
//Start server and listen on port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) // Log a message when the server starts
})
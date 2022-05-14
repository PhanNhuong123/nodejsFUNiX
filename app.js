const http = require("http");

const express = require("express")

const app = express()

app.use((req, res, next) => {
  console.log("đây là middlewe")
  next()
}); 

app.use((req, res, next) => {
  console.log("đây là middlewe2")
}); 

const server = http.createServer(app)

server.listen(3000);

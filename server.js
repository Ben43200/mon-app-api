const express = require("express")
const app = express()
const cors = require("cors")
require('dotenv').config()

app.use(cors())

// app.get("/", function(req, res) {
//   res.send("It's working!")
// })
// app.get("/", function(req, res) {
//     res.send({"name": "Jane Doe"}) // Should be json format
//   })

app.listen(process.env.PORT, () => {
  console.log("app listening on port you know")
})

app.get('/', (req, res) => {
    res.send('Hello from our server!')
})


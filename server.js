const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

// app.get("/", function(req, res) {
//   res.send("It's working!")
// })
// app.get("/", function(req, res) {
//     res.send({"name": "Jane Doe"}) // Should be json format
//   })

app.listen(8080, () => {
  console.log("app listening on port 3000")
})

app.get('/', (req, res) => {
    res.send('Hello from our server!')
})


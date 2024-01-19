const express = require("express")
const app = express()
const cors = require("cors")
require('dotenv').config()

app.use(cors())


app.listen(process.env.PORT, () => {
  console.log("app listening on port you know")
})

app.get('/', (req, res) => {
    res.send('Hello from our server!')
})






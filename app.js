require("dotenv").config()
require("./db")

const express = require("express")
const pictureRouter = require("./routes/picture")

const app = express()
const port = process.env.PORT || 8080

app.use("/pictures", pictureRouter)

app.listen(port, () => {
  console.log(`O servidor está rodando em http://localhost:${port}`)
})

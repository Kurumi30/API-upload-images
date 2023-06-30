require("dotenv").config()

const mongoose = require("mongoose")

mongoose.set("strictQuery", true)

async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.y1bwpf6.mongodb.net/?retryWrites=true&w=majority`
  )

  console.log("Conectado ao banco de dados!")
}

main().catch((err) => console.error(err))

module.exports = main
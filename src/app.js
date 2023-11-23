const express = require("express")
const path = require("path")

const app = express()
const port = process.env.PORT || 8001

express.static(path.join(__dirname, "public"))

app.set('view engine', 'ejs')



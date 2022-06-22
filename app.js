const express = require("express")
const app = express()
const path = require("path")
//const port= process.env.port || 4000
//const host = process.env.host || "localhost"

app.use (express.static(path.resolve(__dirname, "./public")))

app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./view/home.html"))
})

app.get("/register", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./view/register.html"))
})

app.get("/login", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./view/login.html"))
})

app.listen(3000, () => {
    console.log("servidor corriendo en http://localhost:3000")
})
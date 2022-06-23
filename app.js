
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'localhost';


const staticFolder = path.resolve(__dirname, "./public");
app.use(express.static(staticFolder));



app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./view/home.html'))
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./view/login.html"));
  });

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./view/register.html"));
  });
  app.listen(PORT, ()=>{
    console.log(`Server running at http://${HOST}:${PORT}/`)
  });

const express = require("express");
const path = require("path");
const app = express();
const staticFolder = path.resolve(__dirname, "./public");
app.use(express.static(staticFolder));

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'localhost';
app.listen(PORT, ()=>{
  console.log('server running at http://${PORT}:${HOST}/');
});

app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
  });

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
  });

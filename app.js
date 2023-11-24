const express = require("express")
const path = require("path")
const app = express()

//preguntar en clase, si da el mismo resultado poniendo el path.resolve o no

app.use(express.static(path.resolve(__dirname, "./public")));
const port  = process.env.PORT || 3035;

app.listen(port, function () {
    console.log("esta funcionando en 3035");
})

app.get("/", function (req,res) {
    res.sendFile(path.resolve(__dirname, "./src/views/home.html"))
})

app.get("/register", function (req,res) {
    res.sendFile(path.resolve(__dirname, "./src/views/register.html"))
})
app.get("/login", function (req,res) {
    res.sendFile(path.resolve(__dirname, "./src/views/login.html"))
})

/* app.post("/login", function (req, res) {
    res.send("llego el formilario de login")
    
}) */
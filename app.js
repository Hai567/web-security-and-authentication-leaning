//jshint esversion:6
let express = require("express")
let app = express()
let mongoose = require("mongoose")
let bodyParser = require("body-parser")
let PORT = process.env.PORT || 3000
let ejs = require("ejs")

let routeManager = require("./routes/routeManager")

app.use(bodyParser.urlencoded({
    extended: true
}))
mongoose.connect('mongodb://127.0.0.1:27017/secrets')
    .then(console.log("Connect To DB Successfully!!"))
app.set("view engine", "ejs")

routeManager(app)


app.listen(PORT, () => {
    console.log(`Server Is Running On ${PORT}`)
})
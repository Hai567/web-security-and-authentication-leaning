let mongoose = require("mongoose")
let Schema = mongoose.Schema

let User = new Schema ({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
})

module.exports = mongoose.model("Users", User)
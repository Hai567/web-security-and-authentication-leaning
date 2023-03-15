let express = require("express")
let User = require("../Models/User")

class SiteController {

    // [GET] /
    home(req, res, next){
        res.render("home")
    }
    // [GET] /register
    registerGet(req, res, next){
        res.render("register")
    }
    // [POST] /register
    registerPost(req, res, next){
        try {
            User.create(req.body)
                .then(res.redirect("/login"))
        } catch (error) {
            console.log(error)
            res.send("Can Not Save New User")
        }
    }
    // [GET] /login
    loginGet(req, res, next){
        res.render("login")
    }
    // [POST] /login
    loginPost(req, res, next){
        User.findOne({
            email: req.body.email,
            password: req.body.password
        })
        .where("users")
        .then(user => {
            if (user != null){
                res.render("secrets")
            }else{
                res.send("Can Not Find Appropriate User, Please Try Again")
            }
        })
    }

}


module.exports = new SiteController
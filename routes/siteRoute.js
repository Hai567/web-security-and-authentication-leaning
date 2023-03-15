let express = require("express")
let siteController = require("../controllers/siteController")
let router = express.Router()

router.get("/login", siteController.loginGet)
router.post("/login", siteController.loginPost)
router.get("/register", siteController.registerGet)
router.post("/register", siteController.registerPost)
router.get("/", siteController.home)

module.exports = router
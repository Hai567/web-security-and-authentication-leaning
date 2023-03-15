let siteRoute = require("./siteRoute")
function routes(app) {  

    app.use("/", siteRoute)

}

module.exports = routes
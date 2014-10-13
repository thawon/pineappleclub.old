var express = require("express"),
    router = express.Router();

// catch all route for history
router.get("*", function (req, res) {
    var page = { environmentScript: "scripts/main" };

    if (process.env.PORT) {
        page.environmentScript = "scripts/optimized";
    }

    res.render("index", { page: page });
});

module.exports = router;


//// about page route (http://localhost:8080/about)
//router.get("/about", function (req, res) {
//    res.send("im the about page!");
//});
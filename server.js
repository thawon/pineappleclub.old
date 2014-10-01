// server.js (Express 4.0)
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var consolidate = require("consolidate");
var path = require("path");
var app = express();
var port = process.env.PORT || 3000;

app.engine("html", consolidate.jade);
app.set("view engine", "jade");
app.set("views", __dirname + "\\app");

app.use(express.static(__dirname + "/app")); 	// set the static files location /public/img will be /img for users
app.use(morgan("dev")); 					// log every request to the console
app.use(bodyParser.urlencoded({ extended: false }))    // parse application/x-www-form-urlencoded
app.use(bodyParser.json())    // parse application/json
app.use(methodOverride()); 					// simulate DELETE and PUT

// get an instance of router
var router = express.Router();

// catch all route for history
router.get("*", function (req, res) {
    var page = { environmentScript: "scripts/main" };

    if (process.env.PORT) {
        page.environmentScript = "scripts/optimized";
    }

    res.render("index", { page: page });
});

// about page route (http://localhost:8080/about)
router.get("/about", function (req, res) {
    res.send("im the about page!");
});

// apply the routes to our application
app.use("/", router);

app.listen(port);
console.log("Magic happens on port " + port); 
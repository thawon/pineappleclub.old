var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/app"));

app.listen(app.get("port"), function () {
    console.log("Now serving the app at http://localhost:3000");
});
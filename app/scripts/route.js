define(
    [],
    function () {
        return {
            defaultRoutePath: "/",
            routes: {
                "/": {
                    templateUrl: "views/home.html",
                    dependencies: [
                        "controllers/home-controller",
                        "controllers/contact-controller"
                    ]
                }
            }
        };
    });
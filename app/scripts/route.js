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
                        "controllers/contact/contact-controller"
                    ]
                },
                "/contactus": {
                    templateUrl: "views/contact/contact-page.html",
                    dependencies: [
                        "controllers/contact/contact-controller",
                        "controllers/contact/location-controller"
                    ]
                }
            }
        };
    });
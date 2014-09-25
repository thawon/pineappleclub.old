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
                "/photos": {
                    templateUrl: "views/photo/photo.html",
                    dependencies: [
                        "controllers/photo/photo-controller"
                    ]
                },
                "/contactus": {
                    templateUrl: "views/contact/contact-page.html",
                    dependencies: [
                        "controllers/contact/contact-controller",
                        "directives/google-map-directive"
                    ]
                }
            }
        };
    });
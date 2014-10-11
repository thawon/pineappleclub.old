define(
    [],
    function () {
        return {
            defaultRoutePath: "/",
            routes: {
                "/": {                    
                    templateUrl: "views/home.html",
                    dependencies: [
                        "controllers/contact/contact-controller"
                    ]
                },
                "/photos": {
                    templateUrl: "views/photo/photo.html"
                },
                "/services": {
                    templateUrl: "views/services/services.html"
                },
                "/philosophy": {
                    templateUrl: "views/philosophy/philosophy.html"
                },
                "/contactus": {
                    templateUrl: "views/contact/contact-page.html",
                    dependencies: [
                        "controllers/contact/contact-controller"
                    ]
                }
            }
        };
    });
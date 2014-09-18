require.config({
    paths: {
        /* vendors */
        angular: "vendors/angular.min",
        ngResource: "vendors/angular-resource.min",
        jquery: "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min",
        bootstrap: "bootstrap/js/bootstrap.min",

        /* services */
        dependencyResolver: "services/dependency-resolver-service"
    },
    shim: {
        ngResource: {
            deps: ["angular"]
        },
        angular: {
            deps: ["jquery"],
            exports: "angular"
        },
        bootstrap: {
            deps: ["jquery"]
        }
    }
});

require(
    [
        "angular",
        "app",
        "controllers/navigator-controller",
        "controllers/header-controller",
        "controllers/footer-controller"
    ],
    function (angular, app) {
        angular.bootstrap(document, ["pineappleclub"]); 
    }
);

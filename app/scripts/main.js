require.config({
    paths: {
        /* vendors */
        angular: "vendors/angular.min",
        ngResource: "vendors/angular-resource.min",
        jquery: "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min",
        underscore: "vendors/underscore-min",
        bootstrap: "vendors/bootstrap.min",
        async: "vendors/async",

        /* services */
        dependencyResolver: "services/dependency-resolver-service",

        /* infrastructures */
        controllerFactory: "infrastructures/controller-factory",
        utility: "infrastructures/utility",        
        constants: "infrastructures/constants"
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
        },
        underscore: {
            exports: "_"
        }
    }
});

require(
    [
        "angular",
        "app",
        "controllers/navigator-controller",
        "controllers/header-controller",
        "controllers/footer-controller",
        "controllers/side-bar-controller"
    ],
    function (angular, app) {
        angular.bootstrap(document, ["pineappleclub"]); 
    }
);

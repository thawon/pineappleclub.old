define(
    ["app"],
    function (app) {
        app.controller("ProgressBarController", ["$scope", "ngProgress",
            function ($scope, ngProgress) {
                $scope.$on("$routeChangeStart", function () {
                    ngProgress.start();
                    //ngProgress.color("#1d9ad9");
                });

                $scope.$on("$routeChangeSuccess", function () {
                    ngProgress.complete();
                });
            }
        ]);
    });
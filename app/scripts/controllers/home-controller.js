define(
    ["app"],
    function (app) {
        app.controller("HomeController", ["$scope",
            function ($scope) {
                $scope.name = "main page";
            }
        ]);
    });
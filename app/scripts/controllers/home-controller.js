define(
    ["app"],
    function (app) {
        app.controller("HomeController", ["$scope",
            function ($scope) {
                $scope.name = "main page";

                $(document).ready(function () {
                    $("[data-toggle='offcanvas']").click(function () {
                        $(".row-offcanvas").toggleClass("active")
                    });
                });
            }
        ]);
    });
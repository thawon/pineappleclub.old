define(
    ["app", "services/app-configuration-service", "directives/google-map-directive"],
    function (app) {
        app.controller("ContactController", ["$scope", "AppConfigurationService",
            function ($scope, appConfigurationService) {
                $scope.companyInfo = appConfigurationService.companyInfo;
            }
        ]);
    });
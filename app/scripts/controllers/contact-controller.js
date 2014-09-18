define(
    ["app", "services/app-configuration-service"],
    function (app) {
        app.controller("ContactController", ["$scope", "AppConfigurationService",
            function ($scope, appConfigurationService) {
                $scope.companyInfo = appConfigurationService.companyInfo;
            }
        ]);
    });
define(
    ["app", "services/app-configuration-service", "services/navigator-service"],
    function (app) {
        app.controller("NavigatorController", ["$scope", "AppConfigurationService", "NavigatorService",
            function ($scope, appConfigurationService, navigatorService) {
                $scope.project = appConfigurationService.project;
                $scope.menu = navigatorService.pages.main;
            }
        ]);
    });
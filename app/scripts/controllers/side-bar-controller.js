define(
    ["controllerFactory", "constants", 
        "services/device-service", "services/export-service", "services/app-configuration-service", 
        "services/navigator-service", "directives/device-height-directive"],
    function (factory, constants) {
        "use strict";

        factory.create({
            name: "SideBarController",
            configs: {  
                ELE_SIDEBAR: ".row-offcanvas",
                CONS_ACTIVE: "active",
                CSS_SIDEBARSHOW: "side-bar-show",              
                CSS_SIDEBARHIDE: "side-bar-hide",
            },
            dependencies: [
                    "$scope", 
                    "DeviceService", 
                    "$timeout", 
                    "ExportService", 
                    "NavigatorService", 
                    "AppConfigurationService"
                ],
            controller: function ($scope, device, $timeout, exports, navigator, configuration) {
                this.initialise(arguments);

                $scope.project = configuration.project;
                $scope.menu = navigator.pages.main;
                $scope.toggleSideBar = $.proxy(this.toggleSideBar, this);
            },
            toggleSideBar: function () {
                $(this.ELE_SIDEBAR).toggleClass(this.CONS_ACTIVE);
            }
        });
    });
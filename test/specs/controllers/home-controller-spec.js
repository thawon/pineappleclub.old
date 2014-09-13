define(["angularMocks", "controllers/home-controller"],
    function () {
        "use strict";

        describe("Unit: HomeController", function () {
            // Load the module with MainController
            beforeEach(module("pineappleclub"));

            var ctrl, scope;
            
            // inject the $controller and $rootScope services
            // in the beforeEach block
            beforeEach(inject(function ($controller, $rootScope) {
                
                // Create a new scope that"s a child of the $rootScope
                scope = $rootScope.$new();

                // Create the controller
                ctrl = $controller("HomeController", {
                    $scope: scope
                });
            }));

            it("should set $scope.name to 'main page'",
              function () {
                  expect(scope.name).toEqual("main page");
              });
        });
    });
define(["angularMocks", "controllerFactory"],
    function (angularMocks, target) {
        "use strict";

        describe("Unit: Controller Factory", function () {

            beforeEach(module("pineappleclub"));

            var ctrl, scope, controller, AServiceMock;

            beforeEach(inject(function ($controller, $rootScope) {
                scope = $rootScope.$new();

                controller = $controller;
            }));

            it("A controller should be created with appropriate local variables",
            function () {
                AServiceMock = {
                    getServiceName: function () { return "a service"; }
                };

                target.create({
                    name: "A",
                    configs: {
                        CONS1: "CONS1",
                        CONS2: "CONS2"
                    },
                    dependencies: ["$scope", "AService"],
                    controller: function ($scope, aservice) {
                        this.initialise(arguments);

                        $scope.name = "a controller";
                        $scope.serviceName = aservice.getServiceName();
                    },
                    testMethod: function () { }
                });

                ctrl = controller("A", {
                    $scope: scope,
                    AService: AServiceMock
                });

                // controller is created
                expect(ctrl).toBeDefined();

                // appropriate local variables are defined
                expect(ctrl.testMethod).toBeDefined();
                expect(ctrl.CONS1).toBeDefined();
                expect(ctrl.CONS2).toBeDefined();

                expect(scope.name).toBe("a controller");
                expect(scope.serviceName).toBe("a service");
            });
        });
    });
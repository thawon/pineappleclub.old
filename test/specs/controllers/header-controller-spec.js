define(["angularMocks", "controllers/header-controller", "constants"],
    function (angularMocks, target, constants) {
        "use strict";

        describe("Unit: HeaderController", function () {

            beforeEach(module("pineappleclub"));

            var ctrl, scope, DeviceServiceMock, ExportServiceMock,
                sizes = constants.get("device-size");

            beforeEach(inject(function ($controller, $rootScope) {

                scope = $rootScope.$new();

                DeviceServiceMock = {
                    getDeviceSize: function () { }
                };

                ExportServiceMock = {
                    addEventListener: function () { }
                };

                spyOn(ExportServiceMock, "addEventListener");

                ctrl = $controller("HeaderController", {
                    $scope: scope,
                    DeviceService: DeviceServiceMock,
                    ExportService: ExportServiceMock
                });
            }));

            it("resize should be binded to window resize event",
            function () {
                expect(ExportServiceMock.addEventListener).toHaveBeenCalled();
            });

            it("should set to small image",
            function () {
                spyOn(DeviceServiceMock, "getDeviceSize").andReturn(sizes.XS);

                ctrl.resize();

                expect(scope.banner).toEqual(ctrl.IMG_SMALLBANNER);
            });

            it("should set to big image",
            function () {
                spyOn(DeviceServiceMock, "getDeviceSize").andReturn(sizes.L);

                ctrl.resize();

                expect(scope.banner).toEqual(ctrl.IMG_BIGBANNER);
            });
        });
    });
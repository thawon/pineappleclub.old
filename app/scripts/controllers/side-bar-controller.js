define(
    ["controllerFactory", "constants", "services/device-service", "services/export-service"],
    function (factory, constants) {
        "use strict";

        factory.create({
            name: "HeaderController",
            configs: {
                IMG_BIGBANNER: "/images/tree-big.png",
                IMG_SMALLBANNER: "/images/tree-small.png"
            },
            dependencies: ["$scope", "DeviceService", "$timeout", "ExportService"],
            controller: function ($scope, device, $timeout, exports) {
                this.initialise(arguments);

                this.resize();

                exports.addEventListener("resize",
                    $.proxy(
                        function () {
                            $timeout(
                                $.proxy(this.resize, this)); }, this), false);
            },
            resize: function () {
                var sizes = constants.get("device-size"),
                    current = this.device.getDeviceSize();

                if (current === sizes.XS) {
                    this.$scope.banner = this.IMG_SMALLBANNER;
                } else {
                    this.$scope.banner = this.IMG_BIGBANNER;
                }
            }
        });
    });
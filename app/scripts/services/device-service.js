define(
    ["underscore", "app", "utility", "constants"],
    function (_, app, utility, constants) {
        app.factory("DeviceService", [
            function () {
                var device = {
                    size: null,
                    getDeviceSize: function () {
                        var sizes = constants.get("device-size"),
                                result;

                        result = _.chain(_.keys(sizes))
                                    .filter(function (size) { return (utility.isBreakpoint(sizes[size])); })
                                    .value();

                        return sizes[result[0]];
                    }
                };

                return device;
            }
        ]);
    });
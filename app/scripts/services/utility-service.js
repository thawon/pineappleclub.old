define(
    ["app"],
    function (app) {
        app.factory("UtilityService", [
            function () {
                var util = {};

                util.isBreakpoint = function (alias) {
                    return $(".device-" + alias).is(":visible");
                };

                return util;
            }
        ]);
    });
define(
    ["app"],
    function (app) {
        app.directive("pcdDeviceHeight", [
            function () {
                return function (scope, $element, attrs) {
                    $element.height($(window).height());
                }
            }
        ]);
    });
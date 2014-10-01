define(
    ["app"],
    function (app) {
        "use strict";

        app.directive("pcdPhotoGallery", ["$location",
            function ($location) {
                var directive = {
                    link: function (scope, element, attrs) {
                        var x;
                        x = 1;
                    }
                }

                return {
                    restrict: "A",
                    link: function (scope, element, attrs) {
                        directive.link(scope, element, attrs);
                    }
                }
            }
        ]);
    });
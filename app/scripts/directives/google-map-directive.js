define(
    ["app", "async!http://maps.google.com/maps/api/js?sensor=false"],
    function (app) {
        "use strict";

        app.directive("pcdGoogleMap", ["AppConfigurationService",
            function (configuration) {
                var directive = {
                    link: function (scope, element, attrs) {
                        var companyInfo = configuration.companyInfo,
                            map, options;

                        options = {
                            zoom: 17,
                            center: new google.maps.LatLng(companyInfo.location.lat, companyInfo.location.lng)
                        };

                        map = new google.maps.Map($(element).get(0), options);
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
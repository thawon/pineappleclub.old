define(
    ["controllerFactory", "async!http://maps.google.com/maps/api/js?sensor=false"],
    function (factory) {
        "use strict";

        factory.create({
            name: "LocationController",
            elements: {
                googMap: "#mp_map_canvas"
            },
            configs: {                
            },
            dependencies: [
                    "$scope"
                ],
            controller: function ($scope) {
                this.initialise(arguments);

                var map, options;

                var options = {
                    zoom: 8,
                    center: new google.maps.LatLng(-34.397, 150.644)
                  };

                map = new google.maps.Map($(this.googMap).get(0), options);
            }
        });
    });
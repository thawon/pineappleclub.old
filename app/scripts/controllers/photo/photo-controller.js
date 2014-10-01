define(
    ["controllerFactory"],
    function (factory) {
        "use strict";

        factory.create({
            name: "PhotoController",
            configs: {
            },
            dependencies: [
                    "$scope"
                ],
            controller: function ($scope) {
                this.initialise(arguments);
            }
        });
    });
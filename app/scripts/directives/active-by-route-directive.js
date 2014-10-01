define(
    ["app"],
    function (app) {
        "use strict";

        app.directive("pcdActiveByRoute", ["$location", "NavigatorService",
            function ($location, navigator) {
                var directive = {
                    location: $location,
                    navigator: navigator,
                    link: function (scope, element, attrs) {
                        var that = this;

                        that.element = element;
                        that.scope = scope;

                        scope.$on("$routeChangeSuccess", $.proxy(function (event, current, previous) {
                            var photo = _.chain(navigator.pages.main.items)
                                         .filter(function (item) { return (item.name === "photos"); })
                                         .first()
                                         .value();

                            scope.isVisible = (location.pathname === photo.path);
                        }, that));
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
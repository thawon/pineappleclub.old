define(
    ["app", "services/utility-service"],
    function (app) {
        app.controller("HeaderController", ["$scope", "UtilityService",
            function ($scope, util) {

                var bannerImageChange = function () {
                    if (util.isBreakpoint("xs")) {
                        $("#hd_banner_img").attr("src", "/images/tree-small.png");
                    } else {
                        $("#hd_banner_img").attr("src", "/images/tree-big.png");
                    }
                }

                bannerImageChange();

                $(window).resize(function () {
                    bannerImageChange();
                });
            }
        ]);
    });
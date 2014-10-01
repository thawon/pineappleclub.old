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

//                var cpo = []; cpo["_object"] = "cp_widget_6ad5aca0-ee04-48fc-8525-b7b049da1600"; cpo["_fid"] = "AIDAh8bXrWqO";
//                var _cpmp = _cpmp || []; _cpmp.push(cpo);
//                (function () {
//                    var cp = document.createElement("script"); 
//                    cp.type = "text/javascript";
//                    cp.async = true;
//                    cp.src = "//www.cincopa.com/media-platform/runtime/libasync.js";
//                    cp.id = "test_script"
//                    
//                    var c = document.getElementsByTagName("script")[0];
//                    c.parentNode.insertBefore(cp, c);
//                })(); 
            }
        });
    });
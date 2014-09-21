define(
    ["jquery", "infrastructures/fix-variable"],
    function ($, fix) {
        var constants = $.extend(true, {}, fix);

        constants.set(
            "device-size", {
                XS: "xs",
                S: "sm",
                M: "md",
                L: "lg"
            }
        );

        return constants;
    }
);
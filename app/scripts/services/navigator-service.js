define(
    ["app"],
    function (app) {
        app.factory("NavigatorService", [
            function () {
                var navigator = {},
                    items = {
                        home: { name: "home", display: "Home", path: "#/" },
                        services: { name: "services", display: "Services", path: "/services" },
                        photo: { name: "photos", display: "Photos", path: "#/photos" },
                        contact: { name: "contact", display: "Contact Us", path: "#/contactus" },
                        staff: { name: "staff", display: "Our Staff", path: "/staff" },
                        philosophy: { name: "philosophy", display: "Our Philosophy", path: "/philosophy" },
                        facebook: { name: "facebook", display: "Facebook", path: "" },
                        googlePlus: { name: "google-plus", display: "Google Plus", path: "" }
                    };

                navigator.pages = {
                    main: {
                        name: "main",
                        display: "Menu",
                        items: [
                            items.home,
                            items.services,
                            items.photo,
                            items.contact
                        ]
                    },
                    footer: {
                        about: {
                            name: "about",
                            display: "About",
                            items: [
                                items.contact,
                                items.staff,
                                items.philosophy
                            ]
                        },
                        social: {
                            name: "social",
                            display: "Social and stay in touch",
                            items: [
                                items.facebook,
                                items.googlePlus
                            ]
                        }
                    }
                };
                
                return navigator;
            }
        ]);
    });
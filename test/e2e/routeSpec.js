var webdriver = require("selenium-webdriver");

describe("router", function () {
    var ptor;

    beforeEach(function () {
        ptor = protractor.getInstance();
        ptor.driver.get("http://127.0.0.1:3000");
    });

    it("should load the home page", function () {
        var items;

        element(by.id("nav_home")).click();

        items = element.all(by.tagName("h2")).map(function (elm) {
            return elm.getText();
        });

        items.then(function (result) {
            for (var i = 0; i < result.length; i++) {
                var item = result[i];

                if (item === "Welcome") {
                    expect(item).toEqual("Welcome");
                }
                else if (item === "Contact Us") {
                    expect(item).toEqual("Contact Us")
                }
                else {
                    expect(true).toEqual(false);
                }
            }
        });
    });

    it("should load the service page", function () {
        element(by.id("nav_services")).click();

        element(by.tagName("h2")).getInnerHtml()
        .then(function (html) {
            expect(html).toEqual("Services");
        });
    });

    it("should load the photo page", function () {
        element(by.id("nav_photos")).click();

        element(by.tagName("h2")).getInnerHtml()
        .then(function (html) {
            expect(html).toEqual("Photos");
        });
    });

    it("should load the philosophy page", function () {
        element(by.id("nav_philosophy")).click();

        element(by.tagName("h2")).getInnerHtml()
        .then(function (html) {
            expect(html).toEqual("Philosophy");
        });
    });

    it("should load the contact page", function () {
        element(by.id("nav_contact")).click();

        items = element.all(by.tagName("h2")).map(function (elm) {
            return elm.getText();
        });

        items.then(function (result) {
            for (var i = 0; i < result.length; i++) {
                var item = result[i];

                if (item === "Contact Us") {
                    expect(item).toEqual("Contact Us")
                }
                else if (item === "Location") {
                    expect(item).toEqual("Location")
                }
                else {
                    expect(true).toEqual(false);
                }
            }
        });
    });
});

//expect(ptor.isElementPresent(homeH2)).toBe(true);
//element.all(by.repeater("nav in menu.items"));
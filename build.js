({
    baseUrl: "./app/scripts",
    mainConfigFile: "./app/scripts/main.js",
    name: "main",
    include: [
        "controllers/home-controller",
        "controllers/contact/contact-controller"
    ],
    out: "./app/scripts/optimized.js",
    uglify: {
        except: [
            "$scope",
            "$location",
            "device", 
            "exports"
        ]
        //, beautify: true
    }
})
var tests = Object.keys(window.__karma__.files).filter(function (file) {
    // run tests - only files ending with "Spec.js"
    return /Spec\.js$/.test(file);
});

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base',

    paths: {
        angular: 'app/scripts/vendors/angular.min',
        angularMocks: 'app/scripts/vendors/angular-mocks',
        ngResource: 'app/scripts/vendors/angular-resource.min',
        jquery: 'app/scripts/vendors/jquery',
        domReady: 'app/scripts/vendors/domReady',
        app: 'app/scripts/app',
        controllers: 'app/scripts/controllers/controllers'
    },

    shim: {
        ngResource: {
            deps: ['angular'],
            exports: 'angular'
        },
        angularMocks:
        { 
            deps: ['angular']
        },
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        }
        
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
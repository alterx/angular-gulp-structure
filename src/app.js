(function () {
    var app = angular.module('angularAsessment', ['ngRoute']);

    app.config(function ($routeProvider) {

        $routeProvider
            .when('/home', {
                templateUrl: './src/pages/home/home.html',
                controller: 'HomeCtrl as ctrl'
            })
            .otherwise({
                redirectTo: '/home'
            });
    })
})();
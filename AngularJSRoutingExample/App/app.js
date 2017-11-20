(function () {

    var app = angular.module("testApp", ["ngRoute"]);

    //setup routing..
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "main.html",
                controller: "mainCtrl"
            })
            .when("/about", {
                templateUrl: "about.html",
                controller: "aboutCtrl"
            })
        .otherwise({ redirectTo: "/main" })

    });

   

}());
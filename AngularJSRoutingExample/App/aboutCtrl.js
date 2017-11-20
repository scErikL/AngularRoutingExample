(function () {

    var app = angular.module("testApp");

    var aboutCtrl = function ($scope) {

        $scope.test = "aboutControllern: Detta kommer också från angular..";
    }

    app.controller("aboutCtrl", aboutCtrl);



}());

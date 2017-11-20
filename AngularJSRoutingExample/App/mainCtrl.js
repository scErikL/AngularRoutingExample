(function () {

    var app = angular.module("testApp");

    var mainCtrl = function ($scope) {

        $scope.test = "mainControllern: Detta kommer från angular..";
    }

    app.controller("mainCtrl", mainCtrl);



}());

(function() {
    "use strict";
    var app = angular.module("e4", []);
    app.controller("BindingController", BindingController);

    BindingController.$inject = ["$scope"];

    function BindingController($scope) {
        $scope.firstName = "RORONOA";
        // $scope.fullName = "";

        $scope.showNumberOfWatchers = function() {
            console.log("NUMBER OF WATCHERS: " + $scope.$$watchersCount);
        }

        $scope.setFullName = function() {
            $scope.fullName = $scope.firstName + " " + "ZORO";
        }

        $scope.logFirstName = function() {
            console.log("FIRST NAME: " + $scope.firstName);
        }

        $scope.logFullName = function() {
            console.log("FULL NAME: " + $scope.fullName);
        }
    }
})();
(function() {
    "use strict";

    var app = angular.module("e3", []);

    app.controller("counterController", CounterController);

    CounterController.$inject = ["$scope", "$timeout"];

    function CounterController($scope, $timeout) {

        $scope.onceCounter = 0;
        $scope.counter = 0;

        $scope.showNumberOfWatchers = function() {
            console.log("NUMBER OF WATCHERS: " + $scope.$$watchersCount);
        }

        $scope.countOnce = function() {
            $scope.onceCounter = 1;
        }

        $scope.$watch(function() {
            console.log("DIGEST LOOP FIRED");
        });

        // // WATCHERS 1
        // $scope.$watch("onceCounter", function(newValue, oldValue) {
        //     console.log("OLD VALUE: ", oldValue);
        //     console.log("NEW VALUE: ", newValue);
        // });

        // // WATCHERS 2
        // $scope.$watch("counter", function(newValue, oldValue) {
        //     console.log("OLD COUNTER VALUE: ", oldValue);
        //     console.log("NEW COUNTER VALUE: ", newValue);
        // });

        $scope.upCounter = function() {
            // JS
            // setTimeout(function() {
            //     $scope.$apply(function() {
            //         $scope.counter++;
            //         console.log("COUNTER INCREMENTED!");
            //     })
            //     // $scope.$digest();
            // }, 2000);

            // ANGULARJS
            $timeout(function() {
                $scope.counter++;
                console.log("COUNTER INCREMENTED!");
            }, 2000);
        }

    }

})();
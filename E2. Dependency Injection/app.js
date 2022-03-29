(function() {
    "use strict";

    var app = angular.module("e2", []);

    app.controller("e2_controller", ["$scope", "$filter", "lovesFilter", "$injector", function($scope, $filter, lovesFilter, $injector) {
        $scope.name = "Roronoa Zoro";
        $scope.upper = function() {
            var upperCase = $filter("uppercase");
            $scope.name = upperCase($scope.name);
        }

        $scope.cost = 0.50;

        $scope.sayMessage = function() {
            var msg = "RORONOA ZORO LIKES SWORDS";
            return msg;
        }

        $scope.sayLoveMessage = function() {
            var msg = "RORONOA ZORO LIKES SWORDS";
            msg = lovesFilter(msg);
            return msg;
        }

        console.log($injector.annotate($scope.upper));
    }]);

    app.filter("loves", function() {
        return function(input) {
            input = input || "";
            input = input.replace("LIKES", "LOVES");
            return input;
        }
    });

    app.filter("truth", function() {
        return function(input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);
            return input;
        }
    })

})();
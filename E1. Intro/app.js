(function() {
"use strict";
    const app = angular.module("e1", []);

    app.controller("e1_controllerOne", function($scope) {
        // VARIABLE
        $scope.name = "RORONOA ZORO";

        // FUNCTION
        $scope.nameThroughFunction = function() {
            return "DRACULE MIHAWK";
        }
    });

    app.controller("e1_controllerTwo", function($scope) {
        $scope.username = "";
        $scope.totalValue = 0;
        $scope.displayNumeric = function() {
            var totalUsernameValue = calculateNumericForString($scope.username);
            $scope.totalValue = totalUsernameValue;
        }

        function calculateNumericForString(string) {
            var totalStringValue = 0;
            for(let i = 0; i < string.length; i++)
                totalStringValue += string.charCodeAt(i);

            return totalStringValue;
        }
    });

})();
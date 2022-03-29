(function() {
    "use strict";
    
    var shoppingList1 = ["LAYS", "CHEETOS", "LAYS2", "LAYS3", "MILK", "DONUTS", "COOKIES", "CHOCOLATE", "PEANUT BUTTER", "PEPTO BISMOL"];
    var shoppingList2 = [
        {
            name: "MILK",
            quantity: "2"
        },
        {
            name: "DONUTS",
            quantity: "200"
        },
        {
            name: "COOKIES",
            quantity: "300"
        },
        {
            name: "CHOCOLATE",
            quantity: "5"
        },
    ];

    var app = angular.module("e5", []);
    app.controller("ShoppingListController", ShoppingListController);

    ShoppingListController.$inject = ["$scope"];

    function ShoppingListController($scope) {
        $scope.shoppingList1 = shoppingList1;
        $scope.shoppingList2 = shoppingList2;

        $scope.addToList = function() {
            var newItem = {
                name: $scope.newItemName,
                quantity: $scope.newItemQuantity,
            };
            $scope.shoppingList2.push(newItem);
        }
    }

})();
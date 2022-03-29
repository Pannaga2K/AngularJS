(function() {
    "use strict";

    var app = angular.module("e8", []);
    app.controller("ShoppingListAddController", ShoppingListAddController);
    app.controller("ShoppingListShowController", ShoppingListShowController);
    app.service("ShoppingListService", ShoppingListService);

    ShoppingListAddController.$inject = ["ShoppingListService"];
    function ShoppingListAddController(ShoppingListService) {
        var addingItem = this;
        console.log("this: ", this);
        addingItem.itemName = "";
        addingItem.itemQuantity = "";

        addingItem.addItem = function () {
            ShoppingListService.addItem(addingItem.itemName, addingItem.itemQuantity);
        }
    }

    ShoppingListShowController.$inject = ["ShoppingListService"];
    function ShoppingListShowController(ShoppingListService) {
        var showList = this;
        showList.items = ShoppingListService.getItems();
        showList.removeItem = function(itemIndex) {
            ShoppingListService.removeItem(itemIndex);
        }
    }

    function ShoppingListService() {
        var service = this;
        var items = [];
        // ADD ITEM
        service.addItem = function(itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };
            items.push(item);
        };
        // REMOVE ITEM
        service.removeItem = function(itemIndex) {
            items.splice(itemIndex, 1);
        };
        // GET ITEMS
        service.getItems = function () {
            return items;
        }
    }

})();
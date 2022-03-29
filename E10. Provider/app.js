(function() {
    "use strict";

    var app = angular.module("e9", []);

    app.controller("ShoppingListController", ShoppingListController);
    app.provider("ShoppingListService", ShoppingListServiceProvider);
    app.config(Config);

    // CONFIG
    Config.$inject = ["ShoppingListServiceProvider"];
    function Config(ShoppingListServiceProvider) {
        ShoppingListServiceProvider.defaults.maxItems = 2;    
    }

    // CONTROLLER
    ShoppingListController.$inject = ["ShoppingListService"];
    function ShoppingListController(ShoppingListService) {
        var list = this;
        var shoppingList = ShoppingListService();
        list.items = shoppingList.getItems();
        list.itemName = "";
        list.itemQuantity = "";
        list.addItem = function() {
            shoppingList.addItem(list.itemName, list.itemQuantity);
        };
        list.removeItem = function(itemIndex) {
            shoppingList.removeItem(itemIndex);
        };
    }

    // SERVICE
    function ShoppingListService(maxItems) {
        var service = this;
        var items = [];
        service.addItem = function(itemName, itemQuantity) {
            if((maxItems === undefined) || (maxItems !== undefined) && (items.length < maxItems)) {
                var item = {
                    name : itemName,
                    quantity: itemQuantity
                };
                items.push(item);
            } else {
                throw new Error("MAX ITEMS (" + maxItems + ") REACHED!");
            }
        };
        service.removeItem = function(itemIndex) {
            items.splice(itemIndex, 1);
        };
        service.getItems = function() {
            return items; 
        }
    }

    // PROVIDER
    function ShoppingListServiceProvider() {
        var provider = this;
        provider.defaults = {
            maxItems: 10
        }
        provider.$get = function() {
            var shoppingList = new ShoppingListService(provider.defaults.maxItems);
            return shoppingList;
        }
    }

})();
(function() {
    "use strict";

    var app = angular.module("e7", []);

    app.controller("ParentController1", ParentController1);
    app.controller("ChildController1", ChildController1);
    app.controller("ParentController2", ParentController2);
    app.controller("ChildController2", ChildController2);

    ParentController1.$inject = ["$scope"];
    function ParentController1($scope) {
        $scope.parentValue = 1;
        $scope.pc = this;
        $scope.pc.parentValue = 1;
        console.log("$scope.pc: ", $scope.pc);
    }

    ChildController1.$inject = ["$scope"];
    function ChildController1($scope) {
        console.log("$scope.parentValue: ", $scope.parentValue);
        console.log("CHILD $scope: ", $scope);
        $scope.parentValue = 5;
        console.log("=== PARENTVALUE CHANGED ===");
        console.log("$scope.parentValue: ", $scope.parentValue);
        console.log("$scope: ", $scope);
        console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
        console.log("$scope.$parent.parentValue: ", $scope.$parent.parentValue);
    }

    ParentController2.$inject = ["$scope"];
    function ParentController2($scope) {
        var parent = this;
        parent.value = 1;
    }

    ChildController2.$inject = ["$scope"];
    function ChildController2($scope) {
        var child = this;
        child.value = 5;
        console.log("ChildController2 @scope: ", $scope);
    }







})();
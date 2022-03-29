var app = angular.module('e11', []);

app.controller('filter1', function($scope) {
    $scope.firstName = "Roronoa";
    $scope.lastName = "Zoro";
    $scope.swords = [
        {name:'Wado Ichimonji'},
        {name:'Sandai Kitetsu'},
        {name:'Yubashiri'},
        {name:'Shusui'},
        {name:'Enma'},
    ];
    $scope.price = 1.2;
});

app.filter('customFilter', function() {
    return function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 1) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});
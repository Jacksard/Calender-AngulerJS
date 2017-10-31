var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('mainController', ['$scope', '$log', function($scope, $log){
    
    $scope.name = 'Jacob';
    $scope.occupation = 'Programmer';

    $scope.getName = function(){
        return 'Hello Jacob';
    }

    $scope.getName();
    console.log($scope);

}]);
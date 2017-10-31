var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('mainController', function($scope){
    
    $scope.name = 'Jacob';
    $scope.occupation = 'Programmer';

    $scope.getName = function(){
        return 'Hello Jacob';
    }

    $scope.getName();
    console.log($scope);

});
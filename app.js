/**
 * Created by Deepak Sisodiya on 25/03/15.
 */

angular.module('app', [])
.controller('myController', function($scope) {
  $scope.name = 'Deepak';
  $scope.showGreeting = function() {
    $scope.greeting = 'Hello ' + $scope.name;
  }
});
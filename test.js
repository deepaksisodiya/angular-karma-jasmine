/**
 * Created by Deepak Sisodiya on 25/03/15.
 */

describe('Unit: myController', function() {
  // Load the module with MainController
  beforeEach(module('app'));

  var ctrl, scope;
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('myController', {
      $scope: scope
    });
  }));

  it('should create $scope.greeting when calling sayHello',
    function() {
      expect(scope.greeting).toBeUndefined();
      scope.showGreeting();
      expect(scope.greeting).toEqual("Hello Deepak");
    });
});
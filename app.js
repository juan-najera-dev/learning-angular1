(function () {
  "use strict";
  let x = "Hello";
  angular
    .module("myFirstApp", [])
    .controller("myFirstController", function ($scope) {
      $scope.name = "Foo";
      $scope.sayHello = function () {
        return "Hello World";
      };
    });
})();

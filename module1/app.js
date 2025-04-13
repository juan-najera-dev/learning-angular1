(function () {
  "use strict";
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];

  function LunchCheckController($scope) {
    $scope.lunchItems = "";
    $scope.uiResult;
    $scope.result = function () {
      let itemNumber = $scope.countItems($scope.lunchItems);
      if (itemNumber === 0) {
        $scope.uiResult = "Please enter data first";
      } else if (itemNumber <= 3) {
        $scope.uiResult = "Enjoy!";
      } else {
        $scope.uiResult = "Too much!";
      }
    };

    $scope.countItems = function (items) {
      items = items.split(",");

      let i = 0;
      while (i < items.length) {
        items[i] = items[i].replace(/\s+/g, "");
        if (items[i] === "") {
          items.splice(i, 1);
        } else {
          ++i;
        }
      }
      if ((items.length === 1) & (items[0] === "")) {
        return 0;
      }
      return items.length;
    };
  }
})();

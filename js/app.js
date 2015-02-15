var app = angular.module('bytecom', []);


app.controller('taskCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get("http://bytecom.herokuapp.com/services/technicals?email=fabianosousa62@gmail.com").success(function(data) {
    $scope.technical = data;
    console.log('LOG = ' + data.tasks[0].description);
  });

  $scope.orderProp = 'name';
}]);


var myApp = angular.module('bytecom', []);

myApp.controller('loginController', ['$scope', '$http', function formController($scope, $http) {
	$scope.login = function() {
		$scope.message = null;
		var passwordHash = CryptoJS.SHA256($scope.user.password);
		// $http.post("https://bytecom.herokuapp.com/services/securyte/login?login="+$scope.user.login+"&password="+passwordHash)
		$http.post("http://localhost:8080/services/securyte/login?login="+ $scope.user.login + "&password=" + passwordHash)
		.success(function(response, status) {
			if(status == 204) {
				$scope.message = "Credenciais inválida"
			}
		})
		;
	};
}]);
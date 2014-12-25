function loginController ($scope, $http) {
	$scope.login = function() {
		$http.post("https://bytecom.herokuapp.com/services/securyte/login?usuario=clairton&senha=admin")
		.success(function(response) {
			console.log(response);
		});
	};
	$scope.login();
};

var myApp = angular.module('bytecom',[]);

myApp.controller('formController', ['$scope', '$http', function formController ($scope, $http) {
	$scope.user = {"login" : "teste", "password" : "teste"};
    $scope.login = function() {
    	$scope.message = null;
    	var passwordHash = CryptoJS.SHA256($scope.user.password); 
	    console.log("HASG = " + passwordHash);
    	$http.post("https://bytecom.herokuapp.com/services/securyte/login?login="+$scope.user.login+"&password="+passwordHash)
        .success(function(response) {
        	$scope.message = "Credenciais inválida"
	        console.log(response);
        });
    };
}]);

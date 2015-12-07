angular.module('MyApp', [])
.controller('LoginController',function($scope,LoginService){
	$scope.login = function(){
		LoginService.login();
	}
})


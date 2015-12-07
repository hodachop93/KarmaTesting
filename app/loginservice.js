angular.module('MyApp')
.service('LoginService',function(){
	var success = "success login";
	this.login = function() {
		return success;
	}
})
describe('Login Controller',function(){

           //firstly we load app module
           beforeEach(angular.mock.module('MyApp'));

          var result; // create result variable to store the result when we call the service

         // inject scope, and Login service for LoginController
         beforeEach(angular.mock.inject(function($rootScope, $controller, LoginService) {
         	mock = {
         		$scope: $rootScope.$new(),
         		LoginService: LoginService
         	};

         // we created a mock for Login controller
         $controller('LoginController', mock);
     }));

         it('should get successful message', function () {

      // we mocked the Login Service, any time the controller call LoginService.login we return the message : success login and assign it to result variable
      spyOn(mock.LoginService, "login").and.callFake(function() {
      	result = "success login";
      });

      //Login controller call login
      mock.$scope.login();

      // we expect the result
      expect(result).toEqual('success login');
  	});

 });

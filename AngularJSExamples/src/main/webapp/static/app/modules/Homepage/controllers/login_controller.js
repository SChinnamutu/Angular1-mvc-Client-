/*'use strict';

define(['app'], function(app) {
	app.controller('LoginCtrl', ['$scope', '$state', '$window', '$rootScope', '$stateParams', 'loginService',
	                             function($scope, $state, $window, $rootScope, $stateParams, loginService) {	
		$window.alert("Login controller successfully.");
		$scope.loginData = null;
		$scope.checkUserExist = function() {
			loginService.checkUser($scope.loginData)
			.success(function(response) {
				if(response == "1") {
					$window.alert("Login perform successfully.");
					$state.transitionTo('home');
				} else {
					$window.alert("Something goes wrong. Please try again.");
				}
			})
			.error(function(response) {
				$window.alert("Something goes wrong. Please try again.");
			});
		};
		
	}]);
	console.log("LoginCtrl Controller loaded..");
});*/
'use strict';

define(['app'], function(app) {
	app.controller('EditUserCtrl', ['$scope', '$state', '$window', '$rootScope', '$stateParams', 'userService',function($scope, $state, $window, $rootScope, $stateParams, userService) {
		
		$scope.userData = null;
		
		$scope.$on('$viewContentLoaded', function(){
			$scope.getUserOnId();
		});
		
		$scope.getUserOnId = function() {
			userService.getUsers($stateParams.id)
			.success(function(response) {
				$scope.userData = response[0];
			});	
		};
		
		$scope.editUserDetails = function() {
			userService.editUser($scope.userData)
			.success(function(response) {
				if(response == "1") {
					$scope.updateSuccess = 'User updated successfully.';
					$state.transitionTo('view');
				} else {
					$scope.updateFailure = 'Something goes wrong. Please try again.';
				}
			})
			.error(function(response) {
				$scope.updateFailure = 'Something goes wrong. Please try again.';
			});
		};
		
		$scope.closeErrorDiv = function() {
			$("#close_bn").hide();
		};

		function reset(){
			$scope.userData = {id:null,name:'',website:'',email:''};
	        //delete $scope.userData;
	        //$scope.myForm.$setPristine(); //reset Form
	    }
		
		
		$scope.closeAddNew = function() {
			$state.transitionTo('home');
		};
		
	}]);
	console.log("Edit User Controller loaded..");
});
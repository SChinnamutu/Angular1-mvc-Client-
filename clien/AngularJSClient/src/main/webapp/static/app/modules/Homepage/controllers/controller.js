'use strict';

define(['app'], function(app) {
	app.controller('HomepageCtrl', ['$scope', '$state', '$window', '$rootScope', '$stateParams', 'userService',
	                                function($scope, $state, $window, $rootScope, $stateParams, userService) {	
		
		$scope.userData = null;
		$scope.userList = null;
		$scope.loginData = null;
		$scope.hasError = false;
		$scope.myForm = {};

		
		    
		$scope.checkUserExist = function() {
			userService.checkUser($scope.loginData)
			.success(function(response) {
				if(response == "1") {
					$state.transitionTo('confirm');
				} else {
		            $("#close_bn").show();
				}
			})
			.error(function(response) {
				$scope.errorMessage = 'Applicaion busy.Please try again.';
			});
		};
		
			
		
		$scope.addNewUser = function() {
			userService.newUser($scope.userData)
			.success(function(response) {
				if(response == "1") {
					reset();
					$scope.successUserMessage = 'User added successfully.';
				} else {
					$scope.errorUserMessage = 'Error occured.Please try again.';
				}
			})
			.error(function(response) {
				$scope.errorUserMessage = 'Applicaion busy.Please try again.';
			});
		};
		
		function reset(){
			$scope.userData = {id:null,name:'',website:'',email:''};
	    }
		
		$scope.deleteUser = function(id) {
			userService.deleteUser(id)
			.success(function(response) {
				if(response == "1") {
					$scope.deleteSuccess = 'User deleted successfully.';
					getUsers();
				} else {
					$scope.deleteFailure = 'Error occured.Please try again.';
				}
			})
			.error(function(response) {
				$scope.deleteFailure = 'Applicaion busy.Please try again.';
			});
		};
		
		
		$scope.closeErrorDiv = function() {
			$("#close_bn").hide();
		};
		
		$scope.next = function() {
			if(document.getElementById('agree').checked) {
				$state.transitionTo('dashboard');
			}else { 
				$window.alert('Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy'); 
				return false; 
			}
		};
		
		
		getUsers();
		
		function getUsers() {
			userService.getUsers(0)
			.success(function(response) {
				$scope.userList = response;
			})
			.error(function(response) {
				$window.alert("Error in service.");
			});
		};
		
		$scope.getmodelPopup = function(){
			$('#showModal').modal('show');
	    };
	    
		$scope.openAddNew = function() {
			$state.transitionTo('addNew');
		};
		
		$scope.openDashBoard = function() {
			$state.transitionTo('dashboard');
		};
		
		$scope.viewUserDetails = function() {
			$state.transitionTo('view');
		};
		
		$scope.editUserDetails = function() {
			$state.transitionTo('editUser');
		};
		
		$scope.deleteUserDetails = function() {
			$state.transitionTo('delete');
		};
		
		
		
		$scope.closeAddNew = function() {
			$state.transitionTo('home');
		};
		
		$scope.logout = function() {
			$state.transitionTo('login');
		};
		
		$scope.edit = function(id) {
			$state.go('edit', {'id' : id});
		};
		
	}]);
	console.log("HomepageCtrl Controller loaded..");
});
'use strict';

define(['app'], function(app) {
	app.controller('HomepageCtrl', ['$scope', '$state', '$window', '$rootScope', '$stateParams', 'userService','ui.bootstrap.modal',
	                                function($scope, $state, $window, $rootScope, $stateParams, userService,model) {	
		
		$scope.userData = null;
		$scope.userList = null;
		$scope.loginData = null;
		$scope.hasError = false;

		$scope.showModal = false;
	    $scope.buttonClicked = "";
	    $scope.toggleModal = function(btnClicked){
	        $scope.buttonClicked = btnClicked;
	        $scope.showModal = !$scope.showModal;
	    };
		    
		$scope.checkUserExist = function() {
			userService.checkUser($scope.loginData)
			.success(function(response) {
				if(response == "1") {
					//$window.alert("Login perform successfully.");
					$state.transitionTo('confirm');
				} else {
		            //$scope.errorMessage = 'Authentication failed.Please try again.';
		            $("#close_bn").show();
				}
			})
			.error(function(response) {
				$scope.errorMessage = 'Applicaion busy.Please try again.';
			});
		};
		
			
		$scope.closeErrorDiv = function() {
			$("#close_bn").hide();
		};
		
		$scope.next = function() {
			if(document.getElementById('agree').checked) {
				//$window.alert("Successfully agreed");
				$state.transitionTo('dashboard');
			}else { 
				$window.alert('Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy'); 
				return false; 
			}
		};
		
		$scope.addNewUser = function() {
			userService.newUser($scope.userData)
			.success(function(response) {
				if(response == "1") {
					//$window.alert("User added successfully.");
					//$state.transitionTo('dashboard');
					//$scope.getmodelPopup();
					$('#prizePopup').modal('show');
				} else {
					$window.alert("Something goes wrong. Please try again.");
				}
			})
			.error(function(response) {
				$window.alert("Something goes wrong. Please try again.");
			});
		};
		
		
		$scope.deleteUser = function(id) {
			userService.deleteUser(id)
			.success(function(response) {
				if(response == "1") {
					$window.alert("User added successfully.");
					getUsers();
				} else {
					$window.alert("Something goes wrong. Please try again.");
				}
			})
			.error(function(response) {
				$window.alert("Something goes wrong. Please try again.");
			});
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
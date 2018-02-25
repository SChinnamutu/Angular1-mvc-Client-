'use strict';

define(['app'], function(app) {
	app.config(['$stateProvider', function($stateProvider) {
		
		$stateProvider
		     .state('login', {
		    	url : '/',
		    	templateUrl : '/AngularJSClient/static/app/modules/Homepage/views/login.html',
		    	controller : 'HomepageCtrl'
		     })
		     .state('confirm', {
		    	url : '/confirm',
		    	templateUrl : '/AngularJSClient/static/app/modules/Homepage/views/warning.html',
		    	controller : 'HomepageCtrl'
		     })
		      .state('dashboard', {
		    	url : '/dashboard',
		    	templateUrl : '/AngularJSClient/static/app/modules/Homepage/views/home.html',
		    	controller : 'HomepageCtrl'
		     })
		     .state('home', {
		    	url : '/home',
		    	templateUrl : '/AngularJSClient/static/app/modules/Homepage/views/home.html',
		    	controller : 'HomepageCtrl'
		     })
		     .state('addNew', {
		    	url : '/addNew',
		    	templateUrl : '/AngularJSClient/static/app/modules/Homepage/views/addnew.html',
		    	controller : 'HomepageCtrl'
		     })
		     .state('view', {
		    	url : '/view',
		    	templateUrl : '/AngularJSClient/static/app/modules/Homepage/views/view.html',
		    	controller : 'HomepageCtrl'
		     })
		     .state('delete', {
		    	url : '/delete',
		    	templateUrl : '/AngularJSClient/static/app/modules/Homepage/views/delete.html',
		    	controller : 'HomepageCtrl'
		     })
		      .state('editUser', {
		    	url : '/editUser',
		    	templateUrl : '/AngularJSClient/static/app/modules/Homepage/views/edit.html',
		    	controller : 'HomepageCtrl'
		     })
		     .state('edit', {
		    	url : '/edit/:id',
		    	templateUrl : '/AngularJSClient/static/app/modules/Homepage/views/update.html',
		    	controller : 'EditUserCtrl'
		     });
	}]);
	console.log("Homepage Config loaded..");
});
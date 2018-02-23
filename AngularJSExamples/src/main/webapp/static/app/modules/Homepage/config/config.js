'use strict';

define(['app'], function(app) {
	app.config(['$stateProvider', function($stateProvider) {
		
		$stateProvider
		     .state('login', {
		    	url : '/',
		    	templateUrl : '/AngularJSExamples/static/app/modules/Homepage/views/login.html',
		    	controller : 'HomepageCtrl'
		     })
		     .state('confirm', {
		    	url : '/confirm',
		    	templateUrl : '/AngularJSExamples/static/app/modules/Homepage/views/warning.html',
		    	controller : 'HomepageCtrl'
		     })
		      .state('dashboard', {
		    	url : '/dashboard',
		    	templateUrl : '/AngularJSExamples/static/app/modules/Homepage/views/home.html',
		    	controller : 'HomepageCtrl'
		     })
		     .state('home', {
		    	url : '/home',
		    	templateUrl : '/AngularJSExamples/static/app/modules/Homepage/views/home.html',
		    	controller : 'HomepageCtrl'
		     })
		     .state('addNew', {
		    	url : '/addNew',
		    	templateUrl : '/AngularJSExamples/static/app/modules/Homepage/views/addnew.html',
		    	controller : 'HomepageCtrl'
		     })
		     .state('view', {
		    	url : '/view',
		    	templateUrl : '/AngularJSExamples/static/app/modules/Homepage/views/view.html',
		    	controller : 'HomepageCtrl'
		     })
		     .state('delete', {
		    	url : '/delete',
		    	templateUrl : '/AngularJSExamples/static/app/modules/Homepage/views/delete.html',
		    	controller : 'HomepageCtrl'
		     })
		      .state('editUser', {
		    	url : '/editUser',
		    	templateUrl : '/AngularJSExamples/static/app/modules/Homepage/views/edit.html',
		    	controller : 'HomepageCtrl'
		     })
		     .state('edit', {
		    	url : '/edit/:id',
		    	templateUrl : '/AngularJSExamples/static/app/modules/Homepage/views/edit.html',
		    	controller : 'EditUserCtrl'
		     });
	}]);
	console.log("Homepage Config loaded..");
});
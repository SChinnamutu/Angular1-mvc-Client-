/*'use strict';

define([ 'app' ], function(app) {
	app.service('loginService', [ '$http', function($http) {
		$window.alert("Login service successfully.");
		return {
			checkUser : function(loginData) {
				var url = '/AngularJSExamples/checkUser';
				var data = {
					email : loginData.email,
					password : loginData.password,
				};
				return $http({
					url : url,
					data : $.param(data),
					method : 'POST',
					headers : {
						"Content-Type" : "application/x-www-form-urlencoded"
					}
				});
			}
		} 
	} ]);
});*/
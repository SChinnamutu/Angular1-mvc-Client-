'use strict';

require.config({
    waitSeconds: 200,
	// paths to the library
	paths: {
		'jQuery' : '/AngularJSClient/static/lib/jquery/jquery-3.1.1.min',
		'angular' : '/AngularJSClient/static/lib/angular/angular',
		'angular-resource' : '/AngularJSClient/static/lib/angular/angular-resource',
		'angular-ui-router' : '/AngularJSClient/static/lib/angular/angular-ui-router',
		'domReady' : '/AngularJSClient/static/lib/domready/domready',
		'bootstrap' : '/AngularJSClient/static/lib/bootstrap/js/*'
	},
	
	// modules and dependencies
	shim: {
		'jQuery': {
            'exports': 'jQuery'
        },
        'angular': {
            'exports': 'angular',
            deps: ['jQuery']
        }, 
        'angular': {
            'exports': 'angular',
            deps: ['jQuery']
        },
		'angular-ui-router': {
			'exports': 'angular-ui-router',
			deps: ['angular']
		},
        'angular': {
            'exports': 'angular',
            deps: ['jQuery']
        },        
        'angular-resource': {
        	'exports': 'angular-resource',
        	deps: ['angular']
        },
        'domReady': {
        	'exports': 'domReady',
        	deps: ['angular']
        },
        'bootstrap': {
        	'exports': 'bootstrap',
        	deps: ['jQuery']
        }
	},
	
	// kick start application
	deps: [
	    './modules/Homepage/homepageMain',
		'./AngularJSClient/static/app/bootstrap.js'
	],
	
	priority: [
	    "angular"
	]
});
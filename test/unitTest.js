// Karma configuration
// Generated on Thu Jan 30 2014 19:29:14 GMT+0000 (GMT)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '../',


    // frameworks to use
    frameworks: ['jasmine'],

    plugins : [
		'karma-htmlfile-reporter',
        'karma-junit-reporter',
        'karma-phantomjs-launcher',
        'karma-jasmine',
        'karma-coverage'
    ],


    // list of files / patterns to load in the browser
    files: [
        'app/bower_components/angular/angular.js',
        {pattern: 'app/bower_components/angular-*/angular-*.js'},
        'app/scripts/app.js',
        {pattern: 'app/scripts/**/*.js', included: true},
        {pattern: 'test/spec/**/*.js', included: true}
    ],


    // list of files to exclude
    exclude: [

    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'junit', 'coverage'],
    htmlReporter: {
  	  outputFile: 'test/results.html'
    },

	preprocessors: {
	 // source files, that you wanna generate coverage for
	 // do not include tests or libraries
	 // (these files will be instrumented by Istanbul)
	 'app/scripts/**/*.js': ['coverage']
	},

	// optionally, configure the reporter
	coverageReporter: {
	 type : 'html',
	 dir : 'coverage/'
	},


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};

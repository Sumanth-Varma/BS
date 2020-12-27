'use strict';

module.exports=function(grunt){

	require('time-grunt')(grunt);
	
	require('jit-grunt')(grunt);

	const sass = require('node-sass');

	grunt.initConfig({
		sass: {
			dist: {
				options: {
					implementation: sass
				},
				files: {
					'css/styles.css': 'css/styles.scss'
				}
			}
		},
		watch: {
			files: 'css/*.scss',
			tass: ['sass']
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'css/*.scss',
						'*.html',
						'js/*.js'
					]
				},
				options: {
					watchTask: true,
					server: {
						baseDir: './'
					}
				}
			}
		}
	});

	grunt.registerTask('css',['sass']);
	grunt.registerTask('default',['browserSync', 'watch']);
};
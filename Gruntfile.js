/*
 * @file grunt-charcoal-frontend
 * @link https://github.com/locomotivemtl/grunt-charcoal-frontend
 *
 * @copyright © 2015 Locomotive
 * @license   MIT
 */

'use strict';

/*global __dirname:true*/
/*global require:true*/
module.exports = function(grunt) {

    grunt.loadTasks('tasks');

    require('load-grunt-tasks')(grunt, {
        scope: 'devDependencies',
        config: require('../package.json')
    });

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: [ 'tmp' ]
        },

        // Configuration to be run (and then tested).
        charcoal_frontend: {
            default_options: {
                options: {
                },
                files: {
                    'tmp/default_options': [ 'test/fixtures/testing', 'test/fixtures/123' ]
                }
            },
            custom_options: {
                options: {
                    separator: ': ',
                    punctuation: ' !!!'
                },
                files: {
                    'tmp/custom_options': [ 'test/fixtures/testing', 'test/fixtures/123' ]
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tests: [ 'test/*_test.js' ]
        }

    });

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', [ 'clean', 'charcoal_frontend', 'nodeunit' ]);

    // By default, lint and run all tests.
    grunt.registerTask('default', [ 'jshint', 'test' ]);

};

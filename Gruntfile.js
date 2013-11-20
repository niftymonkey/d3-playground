/*global module */
module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        // Task configuration.
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {}
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            content: {
                src: ['js/**/*.js']
            }
        },
        watch: {
            options: {
                livereload: true
            },
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            content: {
                files: ['<%= jshint.content.src %>', 'css/**/*.css', 'index.html' ],
                tasks: ['jshint:content']
            }
        },
        connect: {
            dev: {
                options: {
                    port: 9000,
                    base: ".",
                    livereload: true
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    
    // Default task.
    grunt.registerTask('default', ['jshint', 'watch']);
    grunt.registerTask('server', ['connect', 'watch']);

};

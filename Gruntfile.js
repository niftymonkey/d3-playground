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
        csscomb: {
            options: {
                expand: true,
                flatten: true
//                blockIndent: false,
//                eofNewline: false,
//                colorCase: "upper"
            },
            dist: {
                files: {
                    'css/combed-main.css': ['css/main.css']
                }
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
                files: ['<%= jshint.content.src %>', 'css/**/main.css', 'index.html' ],
                tasks: ['jshint:content', 'csscomb:dist']
            }
        },
        connect: {
            dev: {
                options: {
                    port: 9000,
                    base: ".",
                    livereload: true,
                    open: true
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-csscomb');
    
    // Default task.
    grunt.registerTask('default', ['jshint', 'csscomb', 'watch']);
    grunt.registerTask('server', ['connect', 'watch']);

};

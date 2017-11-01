/// <binding BeforeBuild='default, copy:all' Clean='copy:all' />

/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: "www/libs",
                    layout: "byComponent",
                    cleanTargetDir: false
                }
            }
        },
        tsd: {
            refresh: {
                options: {
                    // execute a command
                    command: 'reinstall',

                    //optional: always get from HEAD
                    latest: true,

                    // specify config file
                    config: 'tsd.json',

                    // experimental: options to pass to tsd.API
                    opts: {
                        // props from tsd.Options
                    }
                }
            }
        },
        ts: {
            app: {
                options: {
                    fast: 'never'
                },
                files: [
                    {
                        src: ["app/scripts/app.ts", "app/scripts/modules/core/*.ts"],
                        dest: "www/scripts/app.js"

                    },
                    {
                        src: "app/scripts/directives/**/*.ts",
                        dest: "www/scripts/directives/"

                    },
                    {
                        src: "app/scripts/modules/main/**/*.ts",
                        dest: "www/scripts/controllers/"

                    },
                    {
                        src: "app/scripts/modules/main/**/*.ts",
                        dest: "test/src/controllers.js"

                    },
                    {
                        src: "app/scripts/directives/**/*.ts",
                        dest: "test/src/directives.js"

                    },
                    {
                        src: ["app/scripts/app.ts", "app/scripts/modules/core/*.ts"],
                        dest: "test/src/app.js"

                    }
                ]
            }
        },
        less: {
            app: {
                files: {
                    'www/css/app.css': 'app/less/**/*.less'
                }
            }
        },
        copy: {
            all: {
                files: [
                { 'www/index.html': 'app/index.html' },
                { expand: true, flatten: true, src: ['app/scripts/modules/**/*htm'], dest: 'www/pages/', filter: 'isFile' },
                { expand: true, flatten: true, src: ['app/scripts/modules/**/*htm'], dest: 'test/pages/', filter: 'isFile' },
                 { expand: true, flatten: true, src: ['app/scripts/directives/**/*htm'], dest: 'www/partials/', filter: 'isFile' },
                {
                    expand: true, flatten: true, src: [
                    'bower_components/angular/angular.js',
                    'bower_components/angular-route/angular-route.js',
                    'bower_components/angular-mocks/angular-mocks.js',
                    'bower_components/jquery/dist/jquery.js'], dest: 'test/libs/', filter: 'isFile'
                }
                ]
            }
        }
    });

    grunt.registerTask("default", ["bower:install", 'tsd:refresh', 'ts:app', 'less:app', 'copy:all']);

    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-tsd");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-copy");

};
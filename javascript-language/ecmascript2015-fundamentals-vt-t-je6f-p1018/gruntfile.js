module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/es5.js': 'js/es6-parametersAndSpread.js'  // Nuwan - Input file will be js/es6.js and output file will be spit to dist/es5.js
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask('es6', ['babel']);
};

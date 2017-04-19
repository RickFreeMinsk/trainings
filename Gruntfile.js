module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                expand: true,
                cwd: 'styles/less',
                src: '*.less',
                dest: 'styles/css',
                ext: '.css'
            }
        },
        watch: {
            styles: {
                files: ['styles/less/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        },
        svgstore: {
            options: {
                prefix : 'svg-',
                svg: {
                    viewBox : '0 0 100 100',
                    xmlns: 'http://www.w3.org/2000/svg'
                }
            },
            default : {
                files: {
                    'dest/svg-defs.svg': ['svg/*.svg']
                }
            }
        },
        svgtojs: {
            options: {
                src: 'dest/svg-defs.svg',
                dest: 'dest/svg-sprite.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-svgtojs');
    grunt.loadNpmTasks('grunt-svgstore');

    grunt.registerTask('default', ['less', 'watch']);
    grunt.registerTask('svg', ['svgstore', 'svgtojs'])
};
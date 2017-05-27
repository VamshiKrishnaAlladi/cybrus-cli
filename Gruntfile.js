'use strict';

module.exports = function ( grunt ) {
    require( 'load-grunt-tasks' )( grunt );

    grunt.initConfig( {
        'eslint': {
            'options': {
                'config': '.eslintrc.json'
            },
            'target': {
                'src': [
                    'src/**/*.js',
                    '*.js'
                ]
            }
        },
        'watch': {
            'options': {
                'interrupt': true,
                'atBegin': true
            },
            'build': {
                'files': [
                    'src/**/*.js',
                    '*.js'
                ],
                'tasks': [ 'build' ]
            }
        },
        'shell': {
            'options': {
                'failOnError': true
            },
            'jest': {
                'command': 'jest --colors --coverage'
            }
        }
    } );

    grunt.registerTask( 'default', function () {
        grunt.log.ok( 'There are no default tasks specified, Please use a specific task.' +
            '\n\n\tUsage: grunt <task-name>' );
    } );
    grunt.registerTask( 'build', [ 'eslint', 'shell:jest' ] );
};


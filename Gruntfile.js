'use strict';

module.exports = function ( grunt ) {
    require( 'load-grunt-tasks' )( grunt );

    grunt.initConfig( {
        'eslint': {
            'options': {
                'config': '.eslintrc.json',
                'fix': true
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
            },
            'build+': {
                'files': [
                    'src/**/*.js',
                    '*.js'
                ],
                'tasks': [ 'build+' ]
            },
            'deploy': {
                'files': [
                    'src/**/*.js',
                    '*.js'
                ],
                'tasks': [ 'deploy' ]
            }
        },
        'shell': {
            'options': {
                'failOnError': true
            },
            'jest': {
                'command': 'jest --colors'
            },
            'jestCov': {
                'command': 'jest --colors --coverage'
            },
            'codecov': {
                'command': 'codecov'
            }
        }
    } );

    grunt.registerTask( 'default', function () {
        grunt.log.ok( 'There are no default tasks specified, Please use a specific task.' +
            '\n\n\tUsage: grunt <task-name>' );
    } );
    grunt.registerTask( 'build', [ 'eslint', 'shell:jest' ] );
    grunt.registerTask( 'build+', [ 'eslint', 'shell:jestCov' ] );
    grunt.registerTask( 'deploy', [ 'eslint', 'shell:jestCov', 'shell:codecov' ] );
};

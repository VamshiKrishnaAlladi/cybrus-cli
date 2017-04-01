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
                    'index.js'
                ]
            }
        }
    } );

    grunt.registerTask( 'default', function () {
        grunt.log.ok( 'There are no default tasks specified, Please use a specific task.' +
            '\n\n\tExample: grunt <task-name>' );
    } );
    grunt.registerTask( 'build', [ 'eslint' ] );
};


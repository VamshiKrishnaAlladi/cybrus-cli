const gruntTaskLoader = require('load-grunt-tasks');
const chalk = require('chalk');

const defaultTaskMessage =
`
There are no default tasks specified, Please use a specific task.

    Usage: grunt <task-name>
`;

const gruntConfig = {
    eslint: {
        options: {
            config: '.eslintrc.json',
        },
        target: {
            src: [
                'src/**/*.js',
                '*.js',
            ],
        },
    },
    watch: {
        options: {
            interrupt: true,
            atBegin: true,
        },
        lint: {
            files: [
                'src/**/*.js',
                '*.js',
            ],
            tasks: ['lint'],
        },
        build: {
            files: [
                'src/**/*.js',
                '*.js',
            ],
            tasks: ['build'],
        },
        'build+': {
            files: [
                'src/**/*.js',
                '*.js',
            ],
            tasks: ['build+'],
        },
        deploy: {
            files: [
                'src/**/*.js',
                '*.js',
            ],
            tasks: ['deploy'],
        },
    },
    shell: {
        options: {
            failOnError: true,
        },
        jest: {
            command: 'jest --colors',
        },
        jestCov: {
            command: 'jest --colors --coverage',
        },
        codecov: {
            command: 'codecov',
        },
    },
};

module.exports = function gruntExport(grunt) {
    gruntTaskLoader(grunt);

    grunt.initConfig(gruntConfig);

    grunt.registerTask('default', () => {
        grunt.log.ok(chalk.bold.magenta(defaultTaskMessage));
    });

    grunt.registerTask('lint', ['eslint']);

    grunt.registerTask('build', ['eslint', 'shell:jest']);
    grunt.registerTask('build+', ['eslint', 'shell:jestCov']);

    grunt.registerTask('deploy', ['eslint', 'shell:jestCov', 'shell:codecov']);
};

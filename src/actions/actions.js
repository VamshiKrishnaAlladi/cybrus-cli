const chalk = require( 'chalk' );

module.exports = {
    'answer': ( { request } ) => {
        console.log( chalk.yellow( request ) );
        return request;
    }
};

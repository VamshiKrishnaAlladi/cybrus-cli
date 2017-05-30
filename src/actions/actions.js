const chalk = require( 'chalk' );

function answer ( { request } ) {
    console.log( chalk.yellow( request ) );
    return request;
}

module.exports = { answer };

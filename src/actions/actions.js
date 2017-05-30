const chalk = require( 'chalk' );
const responses = require( './../lib/responses' );

function answer () {
    const response = responses.getRandomResponse();

    console.log( chalk.yellow( response ) );
    return response;
}

module.exports = { answer };

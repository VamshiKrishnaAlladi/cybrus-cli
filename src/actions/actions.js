const chalk = require( 'chalk' );

const { log } = require( './../lib/util' );
const responses = require( './../lib/responses' );

function answer () {
    const response = responses.getRandomResponse();

    log( chalk.yellow( response ) );
    return response;
}

module.exports = { answer };

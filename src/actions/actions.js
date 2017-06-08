'use strict';

const chalk = require( 'chalk' );

const { display } = require( './../lib/util' );
const responses = require( './../lib/responses' );

function answer () {
    const response = responses.getRandomResponse();

    display( chalk.yellow( response ) );
    return response;
}

module.exports = { answer };

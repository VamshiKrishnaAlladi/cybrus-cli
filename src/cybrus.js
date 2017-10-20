#! /usr/bin/env node
'use strict';

function processArguments ( args ) {
    console.log( args );
}

( function () {

    const commands = require( 'minimist' )( process.argv.slice( 2 ) );

    processArguments( commands );
} )();

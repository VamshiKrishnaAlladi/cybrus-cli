#!/usr/bin/env node

'use strict';

const program = require( 'commander' );
const actions = require( './actions/actions' );

program
.version( '0.0.1' )
.command( 'answer' )
.description( 'This command is used to make cybrus answer your intellectual questions.' )
.option(
    '-r, --request <request>',
    'overwrites the request to cybrus. [default: "cybrus, please answer."]',
    'cybrus, please answer.'
)
.action( actions.answer );

program.parse( process.argv );

if ( !process.argv.slice( 2 ).length ) {
    program.outputHelp();
}

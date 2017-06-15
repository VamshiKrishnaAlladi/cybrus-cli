#! /usr/bin/env node
'use strict';

( function () {
    const program = require( 'commander' );
    const Actions = require( './actions/actions' );
    const actions = new Actions(
        require( 'chalk' ),
        require( './lib/util' ),
        require( './lib/responses' )
    );

    program
    .version( '0.0.1' )
    .command( 'answer', 'This command is used to make cybrus answer your intellectual questions.' )
    .parse( process.argv );

    if ( !process.argv.slice( 2 ).length ) {
        actions.startAConversation();
    }
} )();

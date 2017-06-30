#! /usr/bin/env node
'use strict';

( function () {
    const program = require( 'commander' );

    const actions = new ( require( './actions/actions' ) )(
        require( 'chalk' ),
        require( './lib/utilities' ),
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

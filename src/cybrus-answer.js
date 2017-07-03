#! /usr/bin/env node
'use strict';

( function () {

    const program = require( 'commander' );
    const actions = new ( require( './actions/actions' ) )(
        require( 'chalk' ),
        require( './lib/utilities' ),
        require( './lib/responses' )
    );

    program.option(
        '-r, --request <request>',
        'overwrites the request to cybrus. [default: "cybrus, please answer."]',
        'cybrus, please answer.'
    )
    .parse( process.argv );

    actions.answer();
} )();

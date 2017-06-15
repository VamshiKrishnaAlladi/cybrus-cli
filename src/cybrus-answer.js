#! /usr/bin/env node
'use strict';

( function () {

    const program = require( 'commander' );

    program.option(
        '-r, --request <request>',
        'overwrites the request to cybrus. [default: "cybrus, please answer."]',
        'cybrus, please answer.'
    )
    .parse( process.argv );

    console.log( 'in cybrus-answer.js' );
} )();

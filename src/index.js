#!/usr/bin/env node

'use strict';

const program = require( 'commander' );
const cybrus = require( './cybrus' );

program
.version( '0.0.1' )
.command( 'answer' )
.description( 'This command is used to make cybrus answer your intellectual questions.' )
.option( '-p, --petition <petition>' )
.action( cybrus.answer );

program.parse( process.argv );

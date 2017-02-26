#!/usr/bin/env node

'use strict';

const program = require( 'commander' );

program.version( '0.0.1' )
	.command( 'answer' )
	.description( 'This command is used to make cybrus answer your intellectual questions.' )
	.option( '--petition <petition>' )
	.action( );

program.parse( process.argv );

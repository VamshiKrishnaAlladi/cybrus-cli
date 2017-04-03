/* global test expect */

const cybrus = require( './cybrus' );

test( 'the default answer', () => {
    const args = {};

    expect( cybrus.answer( args ) ).toBe( 'cybrus, please answer.' );
} );

/* global test expect */

const cybrus = require( './cybrus' );

test( 'the default petition', () => {
    expect( cybrus.answer() ).toBe( 'cybrus, please answer.' );
} );

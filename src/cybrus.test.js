/* global test expect */

const cybrus = require( './cybrus' );

const defaultArgs = {};

test( 'the default petition', () => {
    expect( cybrus.answer( defaultArgs ) ).toBe( 'cybrus, please answer.' );
} );

/* global test expect */

const responses = require( './responses' );

test( 'responses.getRandomResponse() should return a non-empty string', () => {
    const response = responses.getRandomResponse();

    expect( response ).toBeTruthy();
    expect( typeof response ).toBe( 'string' );
} );

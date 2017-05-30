/* global describe test expect */

const responses = require( './responses' );

describe( 'responses.getRandomResponse() :', () => {
    test( 'should return a non-empty string', () => {
        const response = responses.getRandomResponse();

        expect( response ).toBeTruthy();
        expect( typeof response ).toBe( 'string' );
    } );
} );

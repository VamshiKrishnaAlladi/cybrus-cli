/* global describe test expect */

const actions = require( './actions' );

describe( 'actions.answer() :', () => {
    test( 'should return a non-empty string response.', () => {
        const actionAnswerResponse = actions.answer();

        expect( actionAnswerResponse ).toBeTruthy();
        expect( typeof actionAnswerResponse ).toBe( 'string' );
    } );
} );

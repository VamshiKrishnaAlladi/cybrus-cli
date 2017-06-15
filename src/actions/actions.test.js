'use strict';


describe( 'actions.answer() :', () => {
    const Actions = require( './actions' );

    test( 'should return a non-empty string response.', () => {
        const actions = new Actions(
            require( 'chalk' ),
            require( './../lib/util' ),
            require( './../lib/responses' )
        );
        const actionAnswerResponse = actions.answer();

        expect( actionAnswerResponse ).toBeTruthy();
        expect( typeof actionAnswerResponse ).toBe( 'string' );
    } );
} );

// describe( 'actions.startAConversation() :', () => {
//     beforeEach( () => {
//         jest.mock( './../lib/util' );
//     } );

//     test( 'should call display()', () => {
//         const util = require( './../lib/util' );
//         const actions = require( './actions' );

//         actions.startAConversation();

//         expect( jest.isMockFunction( util.display ) ).toBeTruthy();
//         expect( util.display ).toHaveBeenCalled();
//     } );
// } );

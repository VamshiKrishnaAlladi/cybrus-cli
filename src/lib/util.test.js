'use strict';

const util = require ( './util' );

describe ( 'util.getRandomNumber() :', () => {
    test( 'should return a number between 0 and max (param) passed.', () => {
        const max = 1000,
            randomNumber = util.getRandomNumber( max );

        expect( randomNumber ).toBeGreaterThanOrEqual( 0 );
        expect( randomNumber ).toBeLessThan( max );
    } );

    test( 'should return a non-negative number when max (param) is NOT passed', () => {
        const randomNumber = util.getRandomNumber();

        expect( typeof randomNumber ).toBe( 'number' );
        expect( randomNumber >= 0 ).toBeTruthy();
    } );

    test( 'should return 0 when max (param) passed is -ve', () => {
        const randomNumber = util.getRandomNumber( -100 );

        expect( randomNumber ).toBe( 0 );
    } );
} );

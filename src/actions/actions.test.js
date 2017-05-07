/* global test expect */

const actions = require( './actions' );

const defaultArgs = {
    'request': 'cybrus, please answer.'
};

test( 'the default request', () => {
    expect( actions.answer( defaultArgs ) ).toBe( 'cybrus, please answer.' );
} );

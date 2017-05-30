/* global test expect */

const actions = require( './actions' );

const defaultArgs = {
    'request': 'cybrus, please answer.'
};

test( 'the default request', () => {
    const actionResponse = actions.answer( defaultArgs );

    expect( actionResponse ).toBe( 'cybrus, please answer.' );
} );

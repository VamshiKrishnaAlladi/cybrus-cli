const chalk = require( 'chalk' );

module.exports = {
    'answer': function ( { petition = 'cybrus, please answer.' } ) {
        console.log( chalk.yellow( petition ) );
        return petition;
    }
};

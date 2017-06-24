'use strict';

function writeToStream ( stream, output ) {
    stream.write( output );
}

function display ( outputStr ) {
    writeToStream( process.stdout, outputStr + '\r\n' );
}

module.exports = {
    getRandomNumber ( max = Number.MAX_SAFE_INTEGER ) {
        if ( max <= 0 ) { return 0; }

        return Math.floor( Math.random() * max );
    },

    writeToStream,
    display
};

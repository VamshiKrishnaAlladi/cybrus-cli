function getRandomNumber ( max = Number.MAX_SAFE_INTEGER ) {
    if ( max <= 0 ) { return 0; }

    return Math.floor( Math.random() * max );
}

function log ( outputStr ) {
    process.stdout.write( outputStr + '\r\n' );
}

module.exports = { getRandomNumber, log };

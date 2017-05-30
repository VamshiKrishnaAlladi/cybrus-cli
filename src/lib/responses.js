const util = require ( './util' );
const responseStrings = require( './responseStrings' );

const numberOfResponseStrings = responseStrings.length;

function *getRandomResponsesGenerator () {
    while ( true ) {
        const index = util.getRandomNumber( numberOfResponseStrings );

        yield responseStrings[ index ];
    }
}

const responseGenerator = getRandomResponsesGenerator();

function getRandomResponse () {
    return responseGenerator.next().value;
}

module.exports = { getRandomResponse };

'use strict';

const util = require ( './util' );
const responseStrings = require( './responseStrings.json' );

const numberOfResponseStrings = responseStrings.length;

function *getRandomResponsesGenerator () {
    while ( true ) {
        yield responseStrings[ util.getRandomNumber( numberOfResponseStrings ) ];
    }
}

const responseGenerator = getRandomResponsesGenerator();

function getRandomResponse () {
    return responseGenerator.next().value;
}

module.exports = { getRandomResponse };

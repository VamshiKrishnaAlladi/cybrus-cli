'use strict';

const utilities = require ( './utilities' );
const responseStrings = require( './responseStrings.json' );

const numberOfResponseStrings = responseStrings.length;

function *getRandomResponsesGenerator () {
    while ( true ) {
        yield responseStrings[ utilities.getRandomNumber( numberOfResponseStrings ) ];
    }
}

const responseGenerator = getRandomResponsesGenerator();

function getRandomResponse () {
    return responseGenerator.next().value;
}

module.exports = { getRandomResponse };

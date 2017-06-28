'use strict';

const utilities = require ( './utilities' );
const responseStrings = require( './responseStrings.json' );

const numberOfResponseStrings = responseStrings.length;

function getRandomResponse () {
    return responseStrings[ utilities.getRandomNumber( numberOfResponseStrings ) ];
}

module.exports = { getRandomResponse };

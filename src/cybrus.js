#! /usr/bin/env node

function processArguments(args) {
    console.log(args);
}

const commands = require('minimist')(process.argv.slice(2));

processArguments(commands);

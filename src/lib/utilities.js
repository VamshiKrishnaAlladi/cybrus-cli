function writeToStream(stream, output) {
    stream.write(output);
}

function display(outputStr) {
    writeToStream(process.stdout, `${outputStr}\n`);
}

function getRandomNumber(max = Number.MAX_SAFE_INTEGER) {
    if (max <= 0) { return 0; }

    return Math.floor(Math.random() * max);
}

module.exports = {
    getRandomNumber,
    writeToStream,
    display,
};

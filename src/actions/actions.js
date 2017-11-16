module.exports = class Actions {
    constructor(chalk, util, responses) {
        this.chalk = chalk;
        this.util = util;
        this.responses = responses;
    }

    answer() {
        const response = this.responses.getRandomResponse();

        this.util.display(this.chalk.yellow(response));
        return response;
    }
};

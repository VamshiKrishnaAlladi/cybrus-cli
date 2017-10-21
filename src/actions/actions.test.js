const chalk = require('chalk');

const Actions = require('./actions');
const utilities = require('./../lib/utilities');
const responses = require('./../lib/responses');

describe('actions.answer() :', () => {
    test('should return a non-empty string response.', () => {
        const actions = new Actions(chalk, utilities, responses);
        const actionAnswerResponse = actions.answer();

        expect(actionAnswerResponse).toBeTruthy();
        expect(typeof actionAnswerResponse).toBe('string');
    });
});

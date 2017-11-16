const utilities = require('./utilities');

describe('utilities.getRandomNumber() :', () => {
    test('should return a number between 0 and max (param) passed.', () => {
        const max = 1000;
        const randomNumber = utilities.getRandomNumber(max);

        expect(randomNumber).toBeGreaterThanOrEqual(0);
        expect(randomNumber).toBeLessThan(max);
    });

    test('should return a non-negative number when max (param) is NOT passed', () => {
        const randomNumber = utilities.getRandomNumber();

        expect(typeof randomNumber).toBe('number');
        expect(randomNumber >= 0).toBeTruthy();
    });

    test('should return 0 when max (param) passed is -ve', () => {
        const randomNumber = utilities.getRandomNumber(-100);

        expect(randomNumber).toBe(0);
    });
});

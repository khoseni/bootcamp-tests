
describe('Greetings Function test', function () {
    it('Greetin Sir Khoseni correctly', function () {
        assert.equal(greet('Sir Khoseni'), 'Hello, Sir Khoseni');
    });

    it('Greeting My love correctly', function () {
        assert.equal(greet('My love'), 'Hello, My love');
    });

    it('greet an empty string correctly', function () {
        assert.equal(greet(''), 'Hello, ');
    });
});

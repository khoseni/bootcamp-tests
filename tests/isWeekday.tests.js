describe('is Weekday test', function () {
    it('return true for a weekday', function () {
        assert.equal(isWeekday('Monday'), true);
    });

    it('return false for a weekend day', function () {
        assert.equal(isWeekday('Saturday'), false);
    });

    it('return false for an invalid input', function () {
        assert.equal(isWeekday(''), false);
        assert.equal(isWeekday('Funday'), false);
    });
});
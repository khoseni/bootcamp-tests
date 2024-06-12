describe('reg Check test', function () {
    it('return true for a registration number ending with the named location', function () {
        assert.equal(regCheck('ABC 123 GP', 'GP'), true);
    });

    it('return false for a registration number not ending with the named location', function () {
        assert.equal(regCheck('ABC 123 GP', 'EC'), false);
    });

    it('return false for an empty registration number', function () {
        assert.equal(regCheck('', 'GP'), false);
    });

    it('return false for a registration number with an invalid location', function () {
        assert.equal(regCheck('ABC 123 GP', 'XYZ'), false);
    });
});
describe('is From Bellville test', function () {
    it('return true for registration number starting with CY', function () {
        assert.equal(isFromBellville('CY12345'), true);
    });

    it('return false for registration number not starting with CY', function () {
        assert.equal(isFromBellville('CJ12345'), false);
    });

    it('return false for an empty string', function () {
        assert.equal(isFromBellville(''), false);
    });
});
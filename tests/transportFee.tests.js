describe('transport Fee test', function () {
    it('return R40 for the morning shift', function () {
        assert.equal(transportFee('morning'), 'R40');
    });

    it('return R30 for the afternoon shift', function () {
        assert.equal(transportFee('afternoon'), 'R30');
    });

    it('return free for the night shift', function () {
        assert.equal(transportFee('nightshift'), 'free');
    });

    it('return Nah! for the empty string', function () {
        assert.equal(transportFee(''), 'Nah!');
    });

});
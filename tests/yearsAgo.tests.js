describe('yearsAgo Function test', function () {
    it('calculate how many years ago the given year was', function () {
        const result = yearsAgo(2024);
        assert.equal(result, 0);
    });

    it('the current year', function () {
        const currentYear = new Date().getFullYear();
        const result = yearsAgo(currentYear);
        assert.equal(result, 0);
    });

    it('future year', function () {
        const futureYear = new Date().getFullYear() + 30;
        const result = yearsAgo(futureYear);
        assert.equal(result, -30);
    });
});
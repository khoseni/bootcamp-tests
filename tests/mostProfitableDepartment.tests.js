describe('most Profitable Day test', function () {
    it('find the most profitable day', function () {
        const result = mostProfitableDay(salesData);
        assert.equal(result, 'Thursday');
    });
    it('handle different aspects in sales', function () {
        const data = [
            { department: 'hardware', sales: 5000, day: 'Monday' },
            { department: 'outdoor', sales: 5000, day: 'Monday' },
        ];
        const result = mostProfitableDay(data);
        assert.ok(result === 'Monday' || result === 'Tuesday');
    });
});
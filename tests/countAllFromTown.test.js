describe('count all from Town test', function() {
   

    it('count a single registration number from the specified town', function() {
        const regNumbers = 'CJ9012';
        const town = 'CJ';
        const result = countAllFromTown(regNumbers, town);
        const expected = 1;
        assert.equal(result, expected);
    });
    
    it('count multiple registration numbers from the specified town', function() {
        const regNumbers = 'CA1234,CY5678,CJ9012,CJ3456';
        const town = 'CJ';
        const result = countAllFromTown(regNumbers, town);
        const expected = 2;
        assert.equal(result, expected);
    });
});
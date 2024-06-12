describe('countAllPaarl Function test', function () {
   
    it('count a single registration number from Paarl', function () {
        const regNumbers = 'CJ9012';
        const result = countAllPaarl(regNumbers);
        const expected = 1;
        assert.equal(result, expected);
    });
    
    it('count multiple registration numbers from Paarl', function () {
        const regNumbers = 'CA1234,CY5678,CJ9012,CJ3456';
        const result = countAllPaarl(regNumbers);
        const expected = 2;
        assert.equal(result, expected);
    });


});
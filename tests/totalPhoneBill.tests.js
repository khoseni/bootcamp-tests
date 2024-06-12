describe('total Phone Bill test', function() {
    it('calculate the total bill for a mix of calls and SMSs', function() {
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
    });

    it('calculate the total bill for only calls', function() {
        assert.equal(totalPhoneBill('call, call, call'), 'R8.25');
    });

    it('return R0.00 for an empty string', function() {
        assert.equal(totalPhoneBill(''), 'R0.00');
    });
});
function transportFee(time) {
    if (time === 'morning') {
        return 'R40';
    } else if (time === 'afternoon') {
        return 'R30';
    } else if (time === 'nightshift') {
        return 'free';
    } else {
        return 'Nah!'
    }
}
console.log(transportFee('morning'));
console.log(transportFee('afternoon'));
console.log(transportFee('nightshift'));
console.log(transportFee(''));
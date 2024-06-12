var itemList = [
    { name: 'apples', qty: 10 },
    { name: 'pears', qty: 37 },
    { name: 'bananas', qty: 27 },
    { name: 'apples', qty: 3 },
];

var results2 = findItemsOver(itemList, 25);

function findItemsOver(items, threshold) {
    return items.filter(item => item.qty > threshold);
}
console.log(results1);
console.log(results2);
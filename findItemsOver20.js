var itemList = [
    { name: 'apples', qty: 10 },
    { name: 'pears', qty: 37 },
    { name: 'bananas', qty: 27 },
    { name: 'apples', qty: 3 },
];

var results1 = findItemsOver20(itemList);
function findItemsOver20(items) {
    return items.filter(item => item.qty > 20);
}

console.log(results1);
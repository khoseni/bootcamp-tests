var salesData = [
    { department: 'hardware', sales: 4500, day: 'Monday' },
    { department: 'outdoor', sales: 1500, day: 'Monday' },
    { department: 'carpentry', sales: 5500, day: 'Monday' },
    { department: 'hardware', sales: 7500, day: 'Tuesday' },
    { department: 'outdoor', sales: 2505, day: 'Tuesday' },
    { department: 'carpentry', sales: 1540, day: 'Tuesday' },
    { department: 'hardware', sales: 1500, day: 'Wednesday' },
    { department: 'outdoor', sales: 8507, day: 'Wednesday' },
    { department: 'carpentry', sales: 8009, day: 'Wednesday' },
    { department: 'hardware', sales: 12000, day: 'Thursday' },
    { department: 'outdoor', sales: 18007, day: 'Thursday' },
    { department: 'carpentry', sales: 6109, day: 'Thursday' },
    { department: 'hardware', sales: 7005, day: 'Friday' },
    { department: 'outdoor', sales: 12006, day: 'Friday' },
    { department: 'carpentry', sales: 16109, day: 'Friday' },
];

function mostProfitableDepartment(salesData) {
    let departmentSales = {};
    salesData.forEach(item => {
        if (departmentSales[item.department]) {
            departmentSales[item.department] += item.sales;
        } else {
            departmentSales[item.department] = item.sales;
        }
    });

    var mostProfitable = '';
    var maxSales = 0;
    for (const department in departmentSales) {
        if (departmentSales[department] > maxSales) {
            maxSales = departmentSales[department];
            mostProfitable = department;
        }
    }

    return mostProfitable;
}
console.log("Most profitable department: " + mostProfitableDepartment(salesData));

function mostProfitableDay(salesData) {
    let daySales = {};
    salesData.forEach(item => {
        if (daySales[item.day]) {
            daySales[item.day] += item.sales;
        } else {
            daySales[item.day] = item.sales;
        }
    });

    var mostProfitable = '';
    var maxSales = 0;
    for (const day in daySales) {
        if (daySales[day] > maxSales) {
            maxSales = daySales[day];
            mostProfitable = day;
        }
    }
    return mostProfitable;
}
console.log("Most profitable day: " + mostProfitableDay(salesData));
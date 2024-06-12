function isWeekday(day) {
    var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',];
    var formattedDay = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();
    return daysOfWeek.includes(formattedDay);
}
console.log(isWeekday('monday'));
console.log(isWeekday('Tuesday'));
console.log(isWeekday('wednesday'));
console.log(isWeekday('saturDAY'));
console.log(isWeekday('Makhanya')); 
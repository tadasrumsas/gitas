"use strict";

/*
Write a JavaScript function to test whether a date is a weekend. 



Note : Use standard Saturday/Sunday definition of a weekend.
Test Data :
console.log(is_weekend('Nov 15, 2014')); 
console.log(is_weekend('Nov 16, 2014')); 
console.log(is_weekend('Nov 17, 2014'));
Output :
"weekend" 
"weekend" 
undefined
*/

// const isWeekend = () => {
    
// }

// function isweekends (da) {
// let da = 
// }

// 

function date_diff_indays(date1, date2) {
    var dt1 = new Date(date1);
    var dt2 = new Date(date2);
    var timeDiff = dt2.getTime() - dt1.getTime();
    var dayDiff = timeDiff / (1000 * 3600 * 24);
    return Math.floor(dayDiff);
}

// Test Data
console.log(date_diff_indays('04/02/2014', '11/04/2014')); // Output: 216
console.log(date_diff_indays('12/02/2014', '11/04/2014')); // Output: -28

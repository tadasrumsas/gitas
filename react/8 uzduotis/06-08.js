/*
Write a JavaScript function to get difference between two dates in days. 

Test Data :
console.log(date_diff_indays('04/02/2014', '11/04/2014')); 
console.log(date_diff_indays('12/02/2014', '11/04/2014'));
Output :
216 
-28
*/

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


// Write a JavaScript function to get the current date. 

function curday(separator) {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth(); 
    const year = date.getFullYear();
    
    return `${month}${separator}${day}${separator}${year}`;
  }

// Note : Pass a separator as an argument.
// Test Data :
console.log(curday('/')); 
console.log(curday('-'));
// Output :
// "11/13/2014" 
// "11-13-2014"




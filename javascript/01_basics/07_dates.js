// dates

let myDate = new Date();
/*

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); // object
console.log(myDate.toJSON());



let myCreatedDate = new Date(2023, 0, 21);  // the months starts for 0 not 1. but only in arrays or objects.
console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date(2023, 0, 21, 6, 45, 3);
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now(); // it returns the milliseconds from the epoch(1970).
console.log(myTimeStamp);

console.log(Math.floor(myTimeStamp / 1000)); 
// it returns the seconds from the epoch(1970). in case of difference between two dates we will use this.


let newDate = new Date();

console.log(newDate.getDay()); // returns the day of the week (0 for sunday, 1 for monday, etc.)
console.log(newDate.getMonth()+1); // returns the month (0 for january, 1 for february, etc.) that is why we use +1 . in it
console.log(newDate.getDate()); // returns the date of the month


*/

let newDate = new Date();
console.log(newDate.toLocaleString('en-IN', {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}))
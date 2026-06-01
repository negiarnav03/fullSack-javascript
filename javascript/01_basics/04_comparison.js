// console.log(1 > 2)  there is no problem
// console.log("1" > 2) when string is compared to number, number is converted to string.
// console.log("1" < undefined) 

// console.log(null > 0)  this is because the null is converted to number, which is 0,but sometimes it can be confusing due to nan.
// console.log(null == 0)  same here.
 // console.log(null >= 0)  same here. the null can never be determined. but if not compared with == it can be determined. eg: null >= 0 

// console.log(undefined == 0) undefined is converted to number, which is NaN
// console.log(undefined > 0) undefined is converted to number, which is NaN
// console.log(undefined >= 0) undefined is converted to number, which is NaN


// console.log(1 >= 1)
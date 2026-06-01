// const name = "arnav"
// const repoCount = 50 

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`); // stirng interpolation

const Myname = new String("   arna  v")

 const newString = Myname.substring(0,2)

 const anotherString = Myname.slice(-2, -1)
//  console.log(anotherString);
// console.log(Myname.trim());


const url = "https://arnav.com/arnav%20negi"
console.log(url.replace("%20", "_"));

console.log(url.includes("arnav"));

console.log(url.split('-'));

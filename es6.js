// let name = "Sahil";
// let sname = "Kaushal";
// console.log(`${name + " " + sname}`.startsWith("s"));

let a = 50;
let b = 70;
[a, b] = [b, a];

// let temp = a;
// a = b;
// b = temp;
// temp = b;
console.log(`The value of a is ${a} 
&
The value of b is ${b}`);
// console.log(`Fifty is ${a + b}
// not ${2 * (a + b)}`);

// const car = ["bmw", "audi", "jaguar", "mercedes"];
// const [first, , , last] = car;
// console.log(`This is my car whose brand is ${first} and ${last}`);

//  object destructing
/*
const bioData = {
  name: "Sahil Kaushal",
  age: 21,
  deg: "Bca",
  hobb: {
    first: "Programming",
  },
};
// let { name, age, deg } = bioData;
let { name: myname, age, deg, hobb } = bioData;
console.log(`My name is ${myname} & my hobby is ${hobb.first}`);
*/

// Fat arrow function
/*
var sun = function () {
  var a = 5;
  var b = 5;
  return a + b;
};
console.log(sun());
*/
let sum = () => {
  let a = 10;
  let b = 153;
  return a + b;
};
sum();

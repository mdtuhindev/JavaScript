const numbers = [45, 4, 9, 16, 25];

function myFunction(value, index, array) {
   return value > 10;
}
const myFunction2 = (value, index, array) => {
  return value < 10;
}
//array mathood

 const newNumbers = numbers.filter(myFunction);

 console.log(newNumbers);

 const newNumbers2 = numbers.filter(myFunction2);

 console.log(newNumbers2);

const names = ["Fahim", "Ibrahim", "Rifat", "Nafis", "Rafiq"];

function greeting (name) {
    console.log(`Hello, ${name}!`);
}

names.forEach (greeting);

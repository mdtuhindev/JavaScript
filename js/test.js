/*Video No.08*/

// var carName;
carName = "volvo";
var carName;
console.log(carName);

/*Video No.09*/
let abcd = 4;
 abcd = 5;
let a; //declare
a = 5;

a = 7; //reassign

/* deffernt of let and const*/

const b = 5;
const abc  = 5;

// b = 7; // non-reassignable (const)

/* Example of constant array*/

const c = [1, 2, 3, 4];

/*Video No.10 is oparetor*/
/*Video No.11 is Assignment*/
/*Video No.10 is Data Type*/
/*Video No.10 is Function*/
/*Video No.10 is Object*/

const car = {
    name: "Fiat",
    model: 500,
    weight: "850kg",
    color: "white",
    start: function () {
        console.log("car has started");
    },
    drive: function () {
        console.log("car is driving");
    }
};

let x = new Number(5);
console.log(x);

let name1 = "Rohim"

function greeting(name){
    console.log("Hello, "+name1+"!");
    name1 = "mizan"
    function greetingAgain(name){
        console.log("Hi, "+name+"!");
    }
    greetingAgain("Ajaira")
}
name1 = "Karim";
// function greetingMiraz(){
//     console.log("Hello, Miraz!");
//     console.log("Let's eat together.");
//     console.log("Let's watch the movie together.");
// }
// function greetingRohim(){
//     console.log("Hello, Rohim!");
//     console.log("Let's eat together.");
//     console.log("Let's watch the movie together.");
// }
// function greetingKarim(){
//     console.log("Hello, Karim!");
//     console.log("Let's eat together.");
//     console.log("Let's watch the movie together.");
// }

// 1
// greetingRohim()
greeting("Rohim")

// 2 
// greetingMiraz()
greeting("Miraz")

// 3
// greetingKarim()
greeting("Karim")
// 4
// greetingMiraz()
greeting("Miraz")
// 5
// greetingMiraz()
greeting("Miraz")
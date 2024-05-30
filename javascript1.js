console.log("This is the javascript function exercise....");


function greet(name) {
    console.log(name + " is a programmer");
}
let name = "tushar"
let name1 = "sagar"
let name2 = "vishal"
let name3 = "sushant"

greet(name)
greet(name1)
greet(name2)
greet(name3)
console.log("This is tutorial 53");


function sum(a, b, c) {
    let d = a + b + c;
    return d;
    // This line will never execute (Unreachable code)
    // console.log("Function is returned");
}



let returnVal = sum(1, 2, 3);
console.log(returnVal)
// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy"); 
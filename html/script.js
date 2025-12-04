// difference between let and var in JavaScript?
let x = 10;
if (true) {
    let x = 20; 
    console.log(x); // Outputs: 20
}
console.log(x); // Outputs: 10

var y = 10;
if (true) {
    var y = 20; 
    console.log(y); // Outputs: 20
}
console.log(y); // Outputs: 20
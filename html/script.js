let students = {name: "Surya", age: 18, demo:function(){
    console.log("Hello "+this.name);
}};
console.log(students.name);
students.demo();

let employees = {name: "Alice", age: 30, demo:()=>{
    console.log("Hello "+this.name);} //this keyword will not work for arrow functions
};
employees.demo();
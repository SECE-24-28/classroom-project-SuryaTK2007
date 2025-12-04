let students = [
    { name: "Surya", age: 20, marks: 85 },
    { name: "Yaazh", age: 22, marks: 90 },
    { name: "kevin", age: 23, marks: 88 }
];
console.log(students);

students.forEach(student => {
    console.log(`Name: ${student.name}, Age: ${student.age}`);
});
students.push({ name: "Arun", age: 21 });
console.log(students);
students.pop();
console.log(students);
students.map(student => {
    return student.marks += 5;
}); 
console.log(students);
students.filter(student => student.marks > 90);
console.log(students);
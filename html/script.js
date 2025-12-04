arr=["Surya","Vikram","Kiran","Ravi","Ajay"];
console.log(arr);
arr.push("Suresh");
console.log(arr);
arr.pop();
console.log(arr);
arr.shift(); // removes first element
console.log(arr);
arr.unshift("Mahesh"); // adds element at first position
console.log(arr);
// delete arr[2]; // deletes element but keeps index
// console.log(arr);
arr.splice(0,2); // removes 2 elements from index 0
console.log(arr);
let arr1=arr.slice(0,1); // creates new array from index 0 to 1 (not including 1)
console.log(arr1);
arr.splice(0,2,"Ramesh","Suresh"); // adds elements at index 0 by removing 2 elements
console.log(arr);
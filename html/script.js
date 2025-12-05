// Asynchronous example
// console.log("process 1");
// setInterval(()=>console.log("process 2"), 2000);
// console.log("process 3");

console.log("a");
setTimeout(()=>{
    console.log("b");
    setTimeout(()=>{
        console.log("c");
    }, 2000);
}, 2000);
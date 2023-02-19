//function declaration
function add(first,second){
    const total=first+second
    return total
}
//anonymous function and also called function expression
const add1=function(first,second){
    const total=first+second
    return total
}
//arrow function
const add2=(first,second)=>first+second
console.log(add2(10,20))
//syntax arrow function
// #ddd Syntax: Arrow function.

// let x = (parameters) => {
//     // body of the function
// };
//interview question
//different between function declaration ,function expression and arrow function
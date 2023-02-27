/* 
8 ways to get undefined 
    1.if a value declare but not initialize then will give undefined
    2.function that is not console within function or return then will give undefined
    3.parameter that is not passed will be undefined
    4.if return has nothing on the right site will be undefined
    5.property that does not exits on an object will give undefined
    6.accessing array elements outside of the index range will give you undefined
    7.deleting an element inside an array
    8.set a value directly to undefined
*/
let name;
console.log(name)
function value(a,b){
    const result=a+b;
}
console.log(value(10,20))

function third(a,b,c,d){
    console.log(a,b,c,d)
}
third(1,2)
function fourth(a,b){
    return
}
console.log(fourth(10,0))

const user={
    name:"lanju"
}
console.log(user.age)
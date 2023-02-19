// before es6
function add(first,second){
    second=second || 0 // if second variable have some value it will assign second and second value is not exits then second value assign 0 
    const total=first+second 
    return total;
}
console.log(add(10))

// after es6

function add(first=0,second=36){ // here 0 is default value. you can assign any default value .like 0 replace 36
    const total=first+second
    return total
}
console.log(add())
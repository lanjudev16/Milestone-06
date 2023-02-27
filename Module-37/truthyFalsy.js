/* 
    truthy->
        1.true
        2.any number (ve+ and ve-) will be truthy value except 0 
        3.any string will be truthy except empty string 
        4.empty object  
        5.empty array                                               
    falsy->
        1.false
        2.0
        3.'' string
        4.undefined
        5.null
        6.
*/

// const number=false
// if(number){
//     console.log("value is truthy")
// }else{
//     console.log("value is falsy")
// }

let num=[]
if(num){
    console.log("value is truthy")
}else{
    console.log("value is falsy")
}



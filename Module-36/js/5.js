const first={a:1,b:2,c:1}
const second={a:1,b:2,c:5}
// if(first===second){
//     console.log("they are same")
// }else{
//     console.log("different")
// }

// const firstString=JSON.stringify(first)
// const secndString=JSON.stringify(second)

// if(firstString===secndString){
//     console.log("same")
// }else{
//     console.log("different")
// }

for (const key in first) {
   if(first[key]===second[key]){
    console.log("same")
   }else{
    console.log('Different')
   }
}
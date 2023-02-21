const numbers=[1,2,3,4]
const sum=numbers.reduce((preValue,currValue,currIn,arr)=>{
    return preValue+currValue
},0)
console.log(sum)
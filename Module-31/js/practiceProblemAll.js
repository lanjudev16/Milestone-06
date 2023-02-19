//practice problem 4
const arr=(arr1,arr2)=>{
    const newArray=[...arr1,...arr2]
    const result=Math.max(...newArray)
    return result
}
const result=arr([1,2,30,4],[5,6,7,8])
console.log(result)
//practice problem 3
const sqrArray=arr=>{
    let result=0;
    for (let  value of arr) {
        const sv=value*value;
        result=result+sv;
    }
    const length=arr.length;
    const finalValue=result/length;
    return finalValue
}
const sqrResult=sqrArray([2,4,5,3])
console.log(sqrResult)
//practice problem 2
const friendArray=arr=>{
    const evenFriend=[]
    arr.forEach(friend => {
        const friendLength=friend.length%2;
        if(friendLength==0){
            evenFriend.push(friend)
        }
    });
    return evenFriend
}
const friendResult=friendArray(['Anamul','Ali','Shakil','Lanju'])
console.log(friendResult)
//practice problem 1
const multiplyThree=(a,b,c)=>a*b*c
console.log(multiplyThree(12,3,5))
const multiLine=`I am web developer.I love to code.I love to eat`
console.log(multiLine)
const defaultParameter=(a,b=0)=>a+b
console.log(10)
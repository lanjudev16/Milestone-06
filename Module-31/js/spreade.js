const max=Math.max(12,85,999,78)
// console.log(Math.max(max))
const number=[12,3,5,6,9]
// copy a new array by using spread operator
const newNumber=[...number]
number.pop()
newNumber.push(50)
console.log(number)
console.log(newNumber)
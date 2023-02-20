// const numbers = [2, 8, 3, 5, 6]

// // function getDouble(numbers) {
// //     const output = []
// //     for (const number of numbers) {
// //         const double = doubleIt(number);
// //         output.push(double)
// //     }
// //     return output;
// // }


// // function doubleIt(number) {
// //     return number * 2
// // }

// // const result = getDouble(numbers)
// // console.log(result)

// const doubleIt=num=>num*2

// const makeDouble=numbers.map(doubleIt)
// console.log(makeDouble)
// console.log(numbers.map(x=>x*2))


const friends=['Md Ali','Shakil Hasan','Md Lanju Mia','Anamul']
const result=friends.map(f=>f[0])
console.log(result)

const products=[
    {id:1,name:'laptop',price:500},
    {id:2,name:'watch',price:200},
    {id:3,name:'mobile',price:550},
    {id:4,name:'tablet',price:780}
]

const name=products.map(product=>product.name)
const price=products.map(product=>product.price)
console.log(name)
console.log(price)

products.forEach(product => {
    console.log(product.id)
});
const numbers=[12,3,5,4,6,9,7,145,25,36,45]
const bigNum=numbers.filter(num=>num>20)
console.log(bigNum)
const tiny=numbers.filter(num=>num<5)
console.log(tiny)

const products=[
    {id:1,name:'laptop',price:500},
    {id:2,name:'watch',price:200},
    {id:3,name:'mobile',price:550},
    {id:4,name:'tablet',price:780}
]

const value=products.filter(pd=>pd.price>250)
value.forEach(pd => {
    console.log(pd.name)
});
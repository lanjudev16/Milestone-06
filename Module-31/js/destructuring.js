const fish={
    name:'King Hilsa',
    address:'chandpur',
    color:'silver',
    phone:'01629977308',
    price:400
}
//object destructuring 
const {name,address,color,phone,price}=fish
console.log(color)
//array destructuring
const arr=[10,2,,3,5,6]
const [first]=arr
console.log(first)

const nayoks=['bappi','sabana']
const [nayok,nayka]=nayoks
console.log(nayka,nayok)
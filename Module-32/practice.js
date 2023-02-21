/* const arr=[ 1, 9, 17, 22 ]
const result =arr.reduce((pv,cv)=>{
    return pv+cv;
},0)

console.log(result)

// Challenging
const people=[
    {name:'Meena',age:20},
    {name:'rina',age:15},
    {name:'suchorita',age:22}
]

const value= people.reduce((previousValue,current)=>{
    let currentValue=previous.age
    console.log('Current',currentValue)
},{name:'ddd',age:58})

// let sum=0;
// people.forEach(value => {
//     sum=sum+value.age
// });

console.log(value) */





/* practice task no  01 */
const oddArray=[ 1, 3, 5, 7, 9 ]
const result=oddArray.map((item)=>item*2)
const evenArray=[]
for(let i=0;i<oddArray.length;i++){
    evenArray[i]=oddArray[i]*2
}
console.log(evenArray)
console.log(result)

/* task no 02 */

const divisibleByTen=[33, 50, 79, 78, 90, 101, 30]
const divisibleResultByFilter=divisibleByTen.filter(x=>x%10===0)
const divisibleResultByFind=divisibleByTen.find(x=>x%10===0)
console.log(divisibleResultByFilter)
console.log(divisibleResultByFind)

// practice task and challenging task 


const people=[
    {name:'Meena',age:20},
    {name:'rina',age:15},
    {name:'suchorita',age:22}
]

const resultReduceChallenging=people.reduce((sum,current)=>{
    return sum+current.age
},0)

console.log(resultReduceChallenging)

/* practice task no 3 */
const student={
    name:'Ayesh akter',
    age:18
}

console.log(student.age)

// practice task no 4

const data={
    location:[
        {
            latitude:'452 356',
            city:'Dhaka',
            country:'Bangladesh'
        }
    ]
}
console.log(data['location'][0]['city'])
console.log(data.location[0].city)


//challenging task number last

const user= {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }

  console.log(user.email)
  console.log(user.address)
  console.log(user.address.city)
  console.log(user.address.geo.lat)
  console.log(user.company.name)
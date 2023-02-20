// const user=[{
//     id:1,
//     name:'Abul',
//     job:'doctor'
// }]

// console.log(user)

const data={
    count:5000,
    data:[
        {
            id:1,
            name:'babul',
            job:'leader'
        },
        {
            id:2,
            name:'dabul',
            job:'leader'
        }
    ]
}
const firstJob=data.data[0].job
// console.log(firstJob)

const user={
    id:5001,
    name:'thomas alba edition',
    address:{
        street:{
            firstFlor: 'ka/202 kochuket sagor pari',
            secondFlor:'green road'
        },    
        postOffice:'cantonment',
        city:'Dhaka'
    },

}
console.log(user.address.street.secondFlor)
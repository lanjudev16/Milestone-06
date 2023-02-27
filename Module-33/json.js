const user={
    id:1,
    name:'Md Lanju',
    job:'Actor'
}

const stringFy=JSON.stringify(user)
console.log(stringFy)
const jsonObj=JSON.parse(stringFy)
console.log(jsonObj)
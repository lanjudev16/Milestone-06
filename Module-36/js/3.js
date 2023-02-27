const obj={
    name:'lanju',
    age:24,
    money:500,
    exam:function(){
        return this.name
    },
    improveExam:function(){
       return this.exam()
    },
    treatDay:function(amount){
       return this.money=this.money-amount
    }
}
// let key=Object.keys(obj)
// console.log(key)
// console.log(Object.values(obj))
// Object.freeze(obj)
// obj.name='Shakil'
// delete obj.name

// console.log(obj)


for (const key in obj) {
   console.log(obj[key])
}
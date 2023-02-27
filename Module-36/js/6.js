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

console.log(obj.improveExam())
console.log(`Money remaining ${obj.treatDay(100)}`)
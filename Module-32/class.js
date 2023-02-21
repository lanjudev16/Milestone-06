//class also called syntactic sugar
// class declaration rule
//1.0 class name must be start capital letter
//2.0 class body
//syntax
// class Instructor{
//     name;
//     designation='Web course instructor';
//     team='web team'
//     location;
//     constructor(name,location){
//         this.name=name
//         this.location=location
//     }
//     startSupportSession(time){
//         console.log(`start the support session at ${time}`)
//     }
//     createQuiz(module){
//         console.log(`please create module at ${module}`)
//     }
// }
// const aamir=new Instructor('Ammir','Jamalpur');
// aamir.startSupportSession(4.40+" pm")
// aamir.createQuiz(32)
// console.log(aamir)


class TenStudent{
    name;
    id;
    age;
    subclass='SSC Exam batch';
    constructor(name,id,age){
        this.name=name;
        this.id=id
        this.age=age
    }
    read(period){
        console.log(`he read regularly ${period}`)
    }
}
const samira=new TenStudent('Samira Khan mahi',5,10)
samira.read(10)
console.log(samira)
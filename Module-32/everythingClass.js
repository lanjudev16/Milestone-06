class teamMember{
    name;
    location;
    constructor(name,location){
        this.name=name;
        this.location=location;
    }
    provideFeedBack(feedBack){
        console.log(`greet job ${feedBack}`)
    }
}
class developerTeam extends teamMember{
    constructor(name,location){
        super(name,location)
    }
    developApp(){
        console.log('Super work')
    }
}
const result=new developerTeam('alia','jamalpur')
console.log(result)

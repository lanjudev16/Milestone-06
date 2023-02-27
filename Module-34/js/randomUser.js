const loadUser=()=>{
    const url="https://randomuser.me/api/?gender=female"
    fetch(url).then(res=>res.json()).then(data=>displayUser(data))
}
loadUser()
const displayUser=user=>{
    const genderShow=document.getElementById('gender')
    const nameShow=document.getElementById('name')
    genderShow.innerText=user.results[0].gender
    nameShow.innerText=user.results[0].name.title+" "+user.results[0].name.first+" "+user.results[0].name.last

    

}
const loadDataFromApi = async (brandName,dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${brandName}`
    const res = await fetch(url)
    const data = await res.json();
    displayPhone(data.data,dataLimit)
}

const showDetailsButton=()=>{
    
}
//display phone
const displayPhone = (phones,dataLimit) => {
    const phoneContainerId = document.getElementById('phoneContainerId')
    const length=phones.length
    const seeAllDivId=document.getElementById('seeAllDivId')

    const phoneFoundMessageId=document.getElementById('phoneFoundMessageId')
    //message found error 
    if(length===0){
        phoneFoundMessageId.classList.remove('d-none')
    }else{
        phoneFoundMessageId.classList.add('d-none')
    }
    //see all work here
    if(dataLimit && length>12){
        phones=phones.slice(0,12)
        seeAllDivId.classList.remove('d-none')
    }else{
        seeAllDivId.classList.add('d-none')
    }
    
    phoneContainerId.innerHTML=''
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div')
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML = `
        <div class="card">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">${phone.slug}</p>
            <button class="btn btn-primary" onclick="showDetailsButton()">Show Details</button>
        </div>
        </div>
        `
        phoneContainerId.appendChild(phoneDiv)
    });

    const loadingSpinnerId=document.getElementById('loadingSpinnerId')
    loadingSpinnerId.classList.add('d-none')

}

document.getElementById('searchBtnId').addEventListener('click',function(){
    //
    const loadingSpinnerId=document.getElementById('loadingSpinnerId')
    loadingSpinnerId.classList.remove('d-none')

    const inputFieldSearchIdValue=document.getElementById('inputFieldSearchId').value
    loadDataFromApi(inputFieldSearchIdValue,12)
})

const seeAllBtnId=document.getElementById('seeAllBtnId')
seeAllBtnId.addEventListener('click',function(){
    const inputFieldSearchIdValue=document.getElementById('inputFieldSearchId').value
    loadDataFromApi(inputFieldSearchIdValue)
})


document.getElementById('inputFieldSearchId').addEventListener('keypress',function(event){
    if(event.key==='Enter'){
        const inputFieldSearchIdValue=document.getElementById('inputFieldSearchId').value
        loadDataFromApi(inputFieldSearchIdValue,12)
    }
})

loadDataFromApi('apple')
const loadPhones=async(brand,dataLimit)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${brand}`
    const res=await fetch(url);
    const data=await res.json();
    displayPhones(data.data,dataLimit)
}

const displayPhones=(data,dataLimit)=>{
    
    const phoneContainer=document.getElementById('phone-container')
    phoneContainer.innerHTML=''

    //display 12 only
    const showAll=document.getElementById('showAll')
    if(dataLimit && data.length>12){
       data=data.slice(0,12)
       showAll.classList.remove('d-none')
    }else{
        showAll.classList.add('d-none')
    }
    //display no found message
    const noFoundMessage=document.getElementById('noFoundMessage')
    if(data.length===0){
        
        noFoundMessage.classList.remove('d-none')
    }else{
        noFoundMessage.classList.add('d-none')
    }
    //display all phone
    data.forEach(phone => {
        const phoneDiv=document.createElement('div')
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML=`
        <div class="card">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">${phone.slug}</p>
                <button  onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal">show Details</button>
            </div>
        </div>
        `
        phoneContainer.appendChild(phoneDiv)
    });
    //stop loader
    toggleSpinner(false)
}
//process search
const processSearch=(dataLimit)=>{
    toggleSpinner(true)
    const inputFieldSearch=document.getElementById('inputFieldSearch').value
    loadPhones(inputFieldSearch,dataLimit)
}


document.getElementById('btnSearch').addEventListener('click',function(){
    processSearch(10)
})

//enter show value
document.getElementById('inputFieldSearch').addEventListener('keypress',function(e){
    if(e.key==='Enter'){
        processSearch(10)
    }
})


const toggleSpinner=isLoading=>{
    const loader=document.getElementById('loader')
    if(isLoading){
        loader.classList.remove('d-none')
    }else{
        loader.classList.add('d-none')
    }
}

//btn show all
document.getElementById('showAllBtn').addEventListener('click',function(){
    processSearch()
})

const modalDataShow=(data)=>{
    const exampleModalLabel=document.getElementById('exampleModalLabel')
    const phoneDetails=document.getElementById('phoneDetails')
    phoneDetails.innerHTML=`
    <img src="${data.image}" />
    <p>Release date${data.releaseDate}</p></br>
    <h>${data.mainFeatures.chipSet}</h></br>
    <h>${data.mainFeatures.displaySize}</h></br>
    <h>${data.mainFeatures.memory}</h>
    `
    exampleModalLabel.innerText=data.name
}

const loadPhoneDetails=async(id)=>{
    const url=`https://openapi.programming-hero.com/api/phone/${id}`
    const res=await fetch(url)
    const data=await res.json();
    modalDataShow(data.data)
}

loadPhones('phone')
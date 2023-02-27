let asiaBtnIdValue;
const loadRestData = (AsiaBtn) => {
    const url = `https://restcountries.com/v3.1/region/${AsiaBtn}`
    fetch(url).then(res => res.json()).then(regionCountry => {
       
        displayRegionWiseCountry(regionCountry.slice(0, 6))
            
        
    })
}



const displayRegionWiseCountry = sCountries => {
    const restContainer = document.getElementById('restContainer')
    restContainer.innerHTML = ''
    sCountries.forEach(country => {
        const divElement = document.createElement('div')
        divElement.classList.add('col')
        divElement.innerHTML = `
               
        <div class="card h-100">
            <img src="${country.flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${country.name.common}</h5>
                <p class="card-text">${country.translations.ara.official}</p>
            </div>
        </div>
        `
        restContainer.appendChild(divElement)
    });



}







const getId = (BtnId) => {
    asiaBtnIdValue = BtnId.innerText;
    loadRestData(asiaBtnIdValue)

}
document.getElementById('asiaBtn').addEventListener('click', function () {
    const BtnId = document.getElementById('asiaBtn')
    getId(BtnId)
})

document.getElementById('africaBtn').addEventListener('click', function () {
    const BtnId = document.getElementById('africaBtn')
    getId(BtnId)
    
})
document.getElementById('AmericasBtn').addEventListener('click', function () {
    const BtnId = document.getElementById('AmericasBtn')
    getId(BtnId)
})
document.getElementById('EuropeBtn').addEventListener('click', function () {
    const BtnId = document.getElementById('EuropeBtn')
    getId(BtnId)
})
document.getElementById('OceaniaBtn').addEventListener('click', function () {
    const BtnId = document.getElementById('OceaniaBtn')
    getId(BtnId)
})

// region all data show
document.getElementById('btnSeeAll').addEventListener('click',function(){
    
        const url = `https://restcountries.com/v3.1/region/${asiaBtnIdValue}`
        fetch(url).then(res => res.json()).then(regionCountry => {
            displayRegionWiseCountry(regionCountry)    
        })
})




loadRestData('Africa')
const loadCountries=()=>{
    const url="https://restcountries.com/v3.1/all"
    fetch(url).then(res=>res.json()).then(countries=>displayCountries(countries))
}
loadCountries()

const displayCountries=countries=>{
    const countryContainer=document.getElementById('all-countries');
    countries.forEach(country => {
        const countryDiv=document.createElement('div');
        countryDiv.classList.add('country')
        countryDiv.innerHTML=`
        <h3>Name: ${country.name.official}</h3>
        <p>Capital:${country.capital?country.capital[0]:'No Capital'}</p>
        <img src="${country.flags.png}" alt="${country.name.common}" />
        <button onClick="displayCountryDetails('${country.cca2}')">Details</button>
        `
        countryContainer.appendChild(countryDiv)
    });
}

const displayCountryDetails=code=>{
    const url=`https://restcountries.com/v3.1/alpha/${code}`
    fetch(url).then(res=>res.json()).then(data=>showCountryDetails(data))
    
}

const showCountryDetails=countryData=>{
    const countryContainer=document.createElement("div")
    const country=document.getElementById('country')
    countryContainer.classList.add('detailCountry')
    countryContainer.innerHTML=`
    <h1>Name:${countryData[0].name.common}</h1>
    `
    console.log(countryData)
    country.append(countryContainer)
}
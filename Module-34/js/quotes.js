const loadQuote=()=>{
    const url="https://api.kanye.rest/"
    fetch(url).then(res=>res.json()).then(quote=>displayQuotes(quote))
}

const displayQuotes=(quote)=>{
    const blockQuote=document.getElementById('quote');
    blockQuote.innerText=quote.quote
}

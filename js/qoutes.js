const loadQuote = ()=>{
    fetch('https://api.kanye.rest')
    .then(res=>res.json())
    .then(quotes=>displayQuote(quotes));
}

const displayQuote = westQuotes=>{
    const quotesLocation = document.getElementById('west-quote');
    quotesLocation.innerHTML = westQuotes.quote;
    
    
}


loadQuote();
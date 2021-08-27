const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data));
    // akhane ki koresi: data load koresi then json a convert koresi tarpor j data peysi seta function ke pathaisi arrow function a. then id dhore button a click koresi object ke pabar jonnne .but object akhane quoter vitore thakar jonne quote.quote inner text hisebe niyesi 
}
// loadQuotes(); aivabeo call korle kaj hoi but button id diye  sekhane function call koresi tai ata r kaj korbe na 

const displayQuote = quote => {
    console.log(quote.quote);
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;

}
const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
        // console.log(countries);
    /*  const countryDiv = document.getElementById('countries');
     for (const country of countries ){
         console.log(country);
         const p = document.createElement('p');
         p.innerText = `Name: ${country.name}`;
         p.innerText = country.name.capital;// kaj korbe na
         p.innerText = country.borders;
         countryDiv.appendChild(p);
     }  */
    // for each for looper motoi kaj almost .filter,find,foreach agla array er opor kaj kore
    const countriesAll = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML=`
        <h3> ${country.name} </h3>
        <p> ${country.capital}</p>
        <button onclick="countryByName('${country.name}')" > Details </buttion>
        `;

       /*  const h2 = document.createElement('h2');
        h2.innerText = country.name;
        div.appendChild(h2);
        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p); innerHTML diye jeta kora hoise oita r oporer ta same */
        countriesAll.appendChild(div); 
    });
}
const countryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    // .then(data => console.log(data[0]))
    .then(data => displayCountry(data[0]))
}
 
const displayCountry= country => {
    // console.log(country);
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML= `
    <h5>${country.name}</h5>
    <p>population: ${country.population}</p>
    <img width="500px" src= " ${country.flag}">
    `;
}

// every country ke loop through koresi.korar pore every country er jonne akat div create koresi ,div er modhe akta class add koresi akta h3 banaisi.h2 er modhe country name ta liksi .tarpor paragraph banaisi .then para er modhe capital ta bosaisi .div er modhe para and h2 add koresi.finally div ta countriall er moddhe bosai disi .

// ki koresi: dynamic vabe akta functioin ke call koresi,akta parameter dynamic vabe deisi.url set korsi, sob kisui dynamic vabe. 

const loadCountirs = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries =>{
    // console.log(countries[0].name.common);
    countries.forEach(country=>{
        // console.log(country.cca2)

        
        const countriesDiv = document.getElementById('countries');

            // console.log(country.cca2)
        const makeDiv = document.createElement('div');
        makeDiv.classList.add('country');
        makeDiv.innerHTML = `
            <h1>country name: ${country.name.common} </h1>
            <p> Capital : ${country.capital ? country.capital:"no Capital"} </p>
            <button onclick = loadCountriesDetails('${country.cca2}')> Details</button> 
           
        
        `
        countriesDiv.appendChild(makeDiv);
    })
}
const loadCountriesDetails = code =>{
    // console.log("details are coming",code)
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => showCountriesDetails(data[0]))
}
const showCountriesDetails = country =>{
    console.log(country);
    const countryLocation = document.getElementById('details');
    countryLocation.innerHTML = `
        <h2> Name: ${country.name.common}  </h2>
        <img src ='${country.flags.png}'>
        
        `

}

loadCountirs();
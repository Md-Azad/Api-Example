
const loadCountirs = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries =>{
    // console.log(countries[0].name.common);
    countries.forEach(country=>{

        
        const countriesDiv = document.getElementById('countries');

        const makeDiv = document.createElement('div');
        makeDiv.classList.add('country');
        makeDiv.innerHTML = `
            <h1>Country name: ${country.name.common} </h1>
            <p> Capital : ${country.capital ? country.capital:"no Capital"} </p>
        
        `
        countriesDiv.appendChild(makeDiv);
    })
}

loadCountirs();
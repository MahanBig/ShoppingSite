// Api for valutaene
const api = "https://api.exchangerate-api.com/v4/latest/USD";
  
// For å få tak i forskjellige kontroller
var søk = document.querySelector(".searchBox");
var kalkuler = document.querySelector(".convert");
var fraValuta = document.querySelector(".from");
var tilValuta = document.querySelector(".to");
var sisteVerdi = document.querySelector(".finalValue");
var sisteMengde = document.getElementById("finalAmount");
var resultatFra;
var resultatTil;
var søkValue;
  
// Ny hendelse når valuttaen blir forandret
fraValuta.addEventListener('change', (event) => {
    resultatFra = `${event.target.value}`;
});
  
// Ny hendelse når valuttaen blir forandret
tilValuta.addEventListener('change', (event) => {
    resultatTil = `${event.target.value}`;
});
  
søk.addEventListener('input', updateValue);
  
// funksjon for å oppdatere valutaer
function updateValue(e) {
    søkValue = e.target.value;
}
  
// Når brukeren trykker så kaller en fuksjonen getResults 
kalkuler.addEventListener("click", getResults);
  
// funksjon getresults
function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}
  
// Viser resultater etter kalkuleringen
function displayResults(currency) {
    let fromRate = currency.rates[resultatFra];
    let toRate = currency.rates[resultatTil];
    sisteVerdi.innerHTML = 
       ((toRate / fromRate) * søkValue).toFixed(4);
    sisteMengde.style.display = "block";
}
  
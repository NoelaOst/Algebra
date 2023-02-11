const apiKey = "05b981321a49c077bec1cf5ee7b4eb97";
const h1City = document.querySelector(".city");
const divTemp = document.querySelector(".temperature");
const searchBtn = document.querySelector(".search-btn");
const input = document.querySelector(".city-input");
const h1City2 = document.querySelector(".city-2");
const divTemp2 = document.querySelector(".temperature-2");
const searchBtn2 = document.querySelector(".search-btn-2");
const input2 = document.querySelector(".city-input-2");

const handleSearch = () => {
    //stvori varijablu koja ce dohvatiti vrijednost koju osoba napise u input
    const city = input.value;
    if(city.length < 2){
        return
    }
    //napravi url, dodaj ga kao string da povezes s varijablama CITY i APPKEY tako da se mijenjaju ovisno o tome koji je input
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=hr`;
    //dohvati vrijeme pomocu requesta
    const request = new XMLHttpRequest();
    request.open("GET", url, true);

    request.onload = () => {
        if(request.status === 200){
            const responseObject = JSON.parse(request.response);
            const temperature = responseObject.main.temp;
            //main.temp su mjere nadene u dokumentaciji api weathera
            
            h1City.innerText = city;
            divTemp.innerHTML = `Temperatura je ${temperature.toFixed()} &#8451;`
        } else if (request.status >= 404 && request.status < 500) {
            h1City.innerText = `${city} nije nađen`;
            divTemp.innerHTML = " ";

        } else {
            h1City.innerText = "Dogodila se greška, pokušajte ponovno";
        }
        //da se nakon klika input ocisti dovoljno je ubaciti ovaj kod
        input.value = " ";
    }

    request.send();
}
searchBtn.addEventListener("click", handleSearch);

// PRIMJER GDJE KORISTIMO ISTU FUNKCIJU ZA DRUGACIJI EVENT , TJ. TIPKU ENTER, ALI NA DUŽI NAČIN, TAKO DA PRVO DEFINIRAMO ŠTO RADI TA FUNKCIJA PA JU ONDA UPISUJEMO U ADDEVENTLISTENER
// const handleInputKey = (e) => {
//     if (e.key === "Enter") {
//         handleSearch();
//     }
// }

// input.addEventListener("keyup", handleInputKey);




//OVO JE DRUGA VERZIJA ALI KRAĆA

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        handleSearch();
    }
})

//RADII

// input.addEventListener("keypress", e => {
//     if (e.key === "Enter") {
//         handleSearch();
//     }
// })
//primjer APIja za url (wEATHER) U NJEGA OBAVEZNO TREBA DODATI {LON}, {LAT}, {API}
https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}
//MOJ API KEY:
cb0c59a1bdc47738b41b2fa6b450fafb

https://pro.openweathermap.org/data/2.5/forecast/hourly?q=Zagreb&appid=a15f364ceb7f19575a3231cceecd0e16

//profesorov API
https://api.openweathermap.org/data/2.5/weather?q=Zagreb&appid=046137ed276ef98ee5d51f545318f0ee&lang=hr&unit=metric



//asinkrono znaci da ne blokira ostatak koda nego da radi sastrane dok se kod ucitava

// const apiKey = "046137ed276ef98ee5d51f545318f0ee"; 
// const url = "https://api.openweathermap.org/data/2.5/weather?q=Zagreb&appid=" + apiKey;
// var request = new XMLHttpRequest();
// request.open('GET', url, true);

// request.onload = (e) => {
//     const.responseObject = JSON.parse(request.response);
//     console.log(e.target.response);
//     const temperature = responseObject.main.temp;
//     const div = document.querySelector("#rezultat");
//   // Pristupi podacima koje je server vratio
// };

// const handleSearch = () => {
//     //pročitaj input koji je grad
//     const nasInput = document.querySelector('.search');
//     const city = nasInput.value;
//   //napravi url za taj grad
//   const urlGrada = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}"
//   //dohvati vrijeme
//   const request = new HXML
// }
// request.send(); 



// const searchBtn = document.getElementById('btn');
// searchBtn.addEventListener('click', handleSearch)


const input = document.querySelector('#id');
const searchBtn = document.querySelector('#seatch-btn');
const cocktailName = document.querySelector('#cocktail-name');


const handleSearch = () => {
    const newCocktail = input.value.trim();
    if (newCocktail.value === 0 ) {
        alert("Ne valja, pokušaj ponovno")
    }
    const url = "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send();
}



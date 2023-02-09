const input = document.querySelector("#input");
const resultList = document.querySelector('#result-list');

const handleSearchChange = () => {
    const userInput = input.value;
    if (userInput.length < 3) {
        return
    }
    const url = `https://itunes.apple.com/search?term=${userInput}&entity=song`;
    const request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onreadystatechange = () => {
        if(request.status === 200){
            const responseObject = JSON.parse(request.response);
            const artistName = responseObject.artistName;
            resultList.innerHTML = " ";

            for (let i = 0; i < artistName.resultCount; i++) {
                let item = artistName.results[i];
                let li = document.createElement("li");
                li.innerHTML = item;
                resultList.appendChild(li);
              }
        }

    }
    request.send();
}

input.addEventListener("input", handleSearchChange);

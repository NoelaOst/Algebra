const input = document.querySelector('#new-item');
const addBtn = document.querySelector('#add-btn');
const resultList = document.querySelector('#list');

const handleDeletePara = (e) => {
    //ovdje trazimo koji nam je btn kliknut pomocu e targeta i stavljamo kliknuti btn u varijablu, zatim dodajemo novu varijablu u kojemo cemo pomocu kliknutog btna doci do njegovog parenta koji je "p", to znamo iz htmla. i onda cemo ga ukloniti sa remove() metodom
    const clickedBtn = e.target;
    const pForDelete = clickedBtn.parentElement;
    pForDelete.remove();
}

const handleStrikeToggle = (e) => {
    const changedCheckbox = e.target;
    const spanTextElement = changedCheckbox.nextElementSibling;
    spanTextElement.classList.toggle("strike");

}

const handleAddNewToDo = () => {
    //dohvati text iz inputa
    //pazi na:
    // 1. ne zelimo da netko doda prazan tekst
    // 2. ne zelimo da netko dodaje samo razmake
    const newItemText = input.value.trim();
    if (newItemText.length === 0) {
        prompt("ne valja");
    }

    //PRAVIMO: INPUT type checkbox putem js-a
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('change', handleStrikeToggle);

    //pravimo: <span> TEXT <span>
    const tekstSpan = document.createElement('span');
    tekstSpan.innerText = newItemText;

     //PRavimo: btn zakojeg smo osmislisi handle funkciju na pocetku kad ga kliknemo
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';
    deleteBtn.addEventListener('click', handleDeletePara);

    //pravimo: <p>   sad cemo sva ta tri elementa staviti u jedan paragraf jer su oni block elementi
    const newParagraph = document.createElement('p');
    newParagraph.appendChild(checkbox);
    newParagraph.appendChild(tekstSpan);
    newParagraph.appendChild(deleteBtn);

    //sad taj paragraf umetnemo pod postojeci HTML element #list
    resultList.appendChild(newParagraph);

    input.value = '';
}


addBtn.addEventListener("click", handleAddNewToDo);


//ovoje da dodamo to do item klikom na enter

// input.addEventListener("keypress", function (e) {
//     if (e.key === "Enter") {
//       handleItemAdd();
//     } 


input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        handleAddNewToDo()
    }
})
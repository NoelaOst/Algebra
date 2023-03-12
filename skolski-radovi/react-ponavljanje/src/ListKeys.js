//key je potreban na svakoj listi jer pomaže reactu da prati koji se elementi iz liste mjenjaju ili dodaju i brišu
//svakom elementu u listi dodajemo Key, onda React zna da može renderirati samo element koji se promijenio, ne mora renderiati cijelu listu
//Key jer atribut koji se dodaje u JSX-u, nakon što se upotrijebi iteracija pomoću map metode, u li element
//svaki sibling u arreyu mora imati drugačiji key, ali globalno keyevi se mogu ponavljati 
//Key je skoro uvijek id, ako baš nema druge opcije onda se stavlja index
//ke

import { useState } from "react";

const ListKeys = () => {

    const [osobe, setOsobe] = useState([
        { id: 1, ime: 'Pera', prezime: 'Perilak', godine: 33},
        { id: 2, ime: 'Vita', prezime: 'Ogonorafdsl', godine: 6},
        { id: 3, ime: 'Karolina', prezime: 'Baluka', godine: 11},
        { id: 4, ime: 'David', prezime: 'Orgag', godine: 26}
    ]);
    return (  
        <>
        <ol>
            {osobe.map(osoba => <li key={osoba.id}>{osoba.ime}</li>)}
        </ol>
        </>
    );
}
 
export default ListKeys;
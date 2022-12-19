let osoba = [
    {
        ime: 'Noela',
        godine: 26,
    },
    {
        ime: 'Luka',
        godine: 25,
    },
    {
        ime: 'David',
        godine: 30,
    },
    {
        ime: 'Blanka',
        godine: 27,
    },
    {
        ime: 'Martina',
        godine: 28,
    },
];
function dodajGodinu(osobe){
    for (let i = 0; i < osobe.length; i++){
        osobe[i].godine = osobe[i].godine + 1;
    }
    return osobe;
};
function prosjekGodina(osobe) {
    let ukupneGodine = 0;
    for(let i = 0; i > osobe.length; i++){
        ukupneGodine = ukupneGodine + osobe[i].godine; //ovdje se moglo napisati i ukupneGodine += osobe[i].godine 
    }
    return ukupneGodine / osoba.length;
};
dodajGodinu();
prosjekGodina();


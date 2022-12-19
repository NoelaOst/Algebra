let names = ['john', 'mary', 'bella',,'mike'];

for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}


// Zadatak1: nakon što napišete bella izađite iz petlje
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
    if(names[i] === 'bella'){
        break;
    }
}

// Zadatak 2:napište naredbu da uklonite undifined iz niza

let names2 = []
for(let i = 0; i< names.length; i++) {
    if (names[i] !== undefined){
        names2.push(names[i]);
    }
}
// navedena funkcija će proći korz prvi niz i ubaciti sva imena po redu koja nisu undefined, zapravo smo stvorili novi niz




// FUNKCIJA



// Zadatak: napisi najdulju rijec u arrayu

let words = ['quickest', 'brown','fox','jumps','over','the', 'lazy','dog'];
function najDuljaRijec(nizRijeci){
    nizRijeci.sort((a,b) => b-a);
    console.log(nizRijeci[0]);
}

najDuljaRijec(words) //radi  (moje rjesenje)

//profesorovo rjesenje

function duljaRijec(niz){
    let najdulja = '';

    for(let i = 0; i < niz.length; i++){
        let rijec = niz[i];
        if(rijec.length > najdulja.length){
            najdulja = rijec;
        }
        console.log(najdulja)
    }
}
duljaRijec(words);




// OBJEKTI



// prazan objekt 
let dog = {}

// dodavanje propertija u prazan objekt
dog.breed = "chiuaua";
console.log(dog.breed);

// brisanje propertija
delete dog.breed;

// bitno! objekt se ne može pretvoriti u string pomoću metode toString()


// objekt može sadržavti u sebi još jedan objekt 

let obj = {
    marka: "opel",
    boja: "žuta",
    km: 45000,
    vozac: {
        ime: "Marko",
        godine: 35,
    }
}
// isti taj objekt se u JSON piše malo drugačijom sintaksom, da bi pretvorili nešto u JSON koristimo metodu JSON.stringify()

JSON.stringify(obj);

// može biti i suprotno, odnosno jsonov string se može vratiti u objekt pomoću JSON.parse() metode, kao argument se dodaje jsonov string koji izgleda slično kao objekt ali nije nego je pod navodnicima zato je suprotna metoda zvana stringify
JSON.parse()

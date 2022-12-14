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


// ZADATAK objekti

let auto = {
    boja: 'crvena',
    godina: '2019',
    marka: 'Mercedes',
    kilometri: '12000',
    gume: {
        tip: 'zimske',
        marka: 'Sava',
    },
    trenutnaBrzina: 0,
    upaljen: false,
    klimaTemp: 18,
    upali: function(){
        this.upaljen = true;

    },
    ubrzaj: function(brzina){
        if (this.upaljen === true) { //ovo se moze i skraceno napipsati samo if (this.upaljen){...} to ce odma podrazumijevati da je ta varijabla onakva kakva je kad smo je prozvali odnosno u ovom slucaju je False
        this.trenutnaBrzina = brzina;
        } else {
            console.log("Auto nije upaljen");
            // ili return "auto nije upaljen"
        }
        return this.trenutnaBrzina;

    },
    zakoci: function(jako){
        if (jako === true){
            this.trenutnaBrzina -= 10;
        } else {
            this.trenutnaBrzina -=5;
        }

    },
    klima: function(temperatura){
        this.klimaTemp = temperatura;
        return this.klimaTemp; //ovako zapravo mijenjamo objekt pomocu funkcije, doslovno tempratura ce se s 18 ako stavimo kao argument 22, promijeniti na 22

    },
};

// uvijek treba dodati THIS kad se pozivaju varijable u objektu jer ce JS traziti najprije varijable izvan objekta sto je krivo...i onda ce ju sam stvoriti ili ce pokazati error

auto.ubrzaj(50);
auto.zakoci(malo);
auto.upali();

console.log('Moj auto je iz ' + auto.godina + 'i prešao je '+ auto.kilometri + ' kilometara');
console.log(`Moj auto je ${auto.boja} boje i prešao je ${auto.kilometri} kilometara`);

JSON.stringify(auto);




// for in loop

for (let x in auto){ //ovo će ispiati sva imena propertija tj. key od svih propertija i sprema ih u let x
    console.log(x);
}


// ZADATAK
let dobro = "1234567890"
let lose = "334476"
let test = "1234fjhgtozu6789"

//funkcija vraća true ako su svi stringovi jeedinstveni, inače false

let jedinstveniZnakovi = function(password){
    if(!password) {
        return true;
    } if (password.length === 1){
        return true
    }
    // //provjeravnje
    // var char = password[0];
    // for(var i = 1; i < password.length; i++){
    //     if (password[i] === char ){
    //         return false;
    //     }
    // } //ovo ne radi jer provjerava samo broj na indeksu 0 sa ostalima, a što ako se broj na indeksu 2 ponavlja s ostalima
   
    for (var i = 0; i < password.length; i++){
        var znak = password[i];
        for (var j = i+1; j < password.length; j++) {
            var znakDrugi = password[j];
            if (znak === znakDrugi){
                return false;
            }
        }
    }
    
}

// rjesenje 2 - puno krace

var r2 = function(password){
    for (var i = 0; i < password.length; i++){
        if (password.lastIndexOf(password[i]) !== i){
            return false;
        }
    }
    return true
}

//rjesenje 3

var r3 = function(password){
    var znakovi = password.split('').sort();

    for (var i = 1; i < znakovi.length; i++){
        if (znakovi[i] === znakovi[i-1]){
            return false;
        }
    }
    return true;
}
//sort metoda ce razvrstati iste znakove jedan pored drugoga, a zatim cemo usporediti  znak na indeksu jedan sa prijašnjim znakom 

// rjesenje 4- pomocu objekta NISAM PISALA

// rjesenje 5

var r5 = function(password){
    var set = new Set();

    for (var i = 0; i<password.length; i++){
        var znak = password[i];
        if (set.has(znak)){
            return false;
        }
        set.add(znak);
    }

    return true;
}

// rjesenje 6

var r6 = function(password){
    var result = new Set(password).size === password.length;
    return result;
} //set je matematicki set koji po defaultu mora imati razlicite brojeve u sebi, ne dopusta da budu isti, pa kada usporedima parvi password length sa size-om seta on mora biti isti, samo ako je isti znaci da nas password ne ponavlja znakove


// ZADATAK - kako da upotrijebimo barem jednu znamenku i barem jedan spec znak i barem jedno veliko slovo

var znamenke = ['1','2','3','4','5'];
var znakovi = ['!','.',',','-'];
function valjaPass(pass){
    if(!pass || pass.length < 6){
        return false;
    }

    var znamenkeOk = false;
    for (var z in znamenke){
        if(pass.indexOf(z) >= 0){
            znamenkeOk = true;
            break;
        }
    }
    var znakoviOk = false;
    for (var s in znakovi){
        if(pass.indexOf(s) >= 0){
            znakoviOk = true;
            break;
        }
    }
    var velikoSlovoOk = false
    for(var znak in pass){
        if(znak === znak.toUpperCase()){ //ovo znaci da cemo usporediti znak s njegovoim velikim slovom, pa ako je isto to znaci da je nas znak veliko slovo i to je dovoljno
            velikoSlovoOk = true;
            break;
        }
    }

}

//OVO SVE JE BOLJE S REGEXOM




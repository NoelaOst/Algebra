function Dog(){
    this.name = 'Max';
    this.bark = function(){
        return 'vau':
    }
    Dog.prototype.run = function(){
        return "running..."
    }
}

//kada koristimo "this" u normalnoj funkciji ona se odnosi na window. ako je unutar funkcije konstruktora onda se odnosi na nove objekte koji ce nastat iz konstruktora


var dog2 = new Dog();
dog.bark()

var dog3 = new Dog();

dog.prototype.smile = function(){
    return "smiling"
}

//primjer gdje koristimo parametar u funkciji , ovo je sintaksa ECMA SCRYPTA 5
function Dog(name){
    this.name = name || 'Max';
    this.bark = function(){
        return 'vau':
    }
}
//isto samo sintaksa ECMA 6
function Dog(name = 'Max'){
    this.name = name;
    this.bark = function(){
        return 'vau':
    }
}

//spread operator = služi za kopiranje arreya, objekata i funkcija

a = [1,2,3]
[...a] ==> [...[1,2,3]] ==> [1,2,3] //ovo je sad nova lista jer spread radi novu listu

//ako kazemo samo smo kopirali i rascjepkali a u b
b = [...a]

// spread kao parametar se zove rest i znači da ova funkcija onda može primiti od 0 do beskonačno parametara

function f(...arr){
    console.log("dano mi je ${arr.length} argumenata")

}

function f(35,6,8,6);
dano je 4


// PROMISE

function getX() {
    return Math.random() >= 0.5;
}
let wait = new Promise ((resolve, reject) => {
    const x = getRandomTrueFalse();
    if(x) {
        return setTimeout(resolve, 1000);
    }
    return setTimeout(reject,1000);
})
.then(() => console.log('yay'));
.catch(() => console.log('nay'));
//OVA FUNKCIJAce pozvati rendom broj od 0 do 1 ako je ona veci od 0.5 onda idemo u true i funkcija nastavlja u resolve pa u then, ako je manji onda u reject i .catch
// i reject i resolve su zapravo funkcije te ako im stavljamo argument oni primaju samo 1 argument!
//THEN I CATCH UVIJEK primaju samo funkcije kao argumente
//THEN je povezan s resolve tako da mogu biti isti parametri u resolv i then, isto vrijedi i za reject i catch
//PRomise prima funkciju kao parametar i moze biti samo resolve i then ako ocekujemo samo pozitivan ishod

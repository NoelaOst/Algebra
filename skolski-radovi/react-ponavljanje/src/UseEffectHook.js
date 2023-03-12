//Use Effect je hook, koji prima funkciju koja se pokreće svaki put kad se komponenta rendera, dakle pokreće se jednom prilikom prvog rendera i svaki put prilikom neke promjene koja izaziva render
//Treba paziti da se state ne mijenja unutar Use Effecta jer možemo zapasti u infinite loopu, ako Use effect pokreće promjenu statea, onda će se neskonačno mijenjati i renderirati
//ako ne želimo da se use effect pokreće na bilo koju promjenu u komponenti stavljamo Dependency Arrey [] kojim govorimo koja će točno promjena potaknuti use Effect
//ako želimo da se funkcija u Use Efectu pokrene samo jednom prilikom prvog rendera stavljamo prazan dependecy arrey []


import { useState, useEffect } from "react";

const UseEffectHook = () => {


const [count, setCount] = useState(0);
const [counter, setCounter] = useState(0);
const [doubled, setDoubled] = useState(0);
const [squared, setSquared] = useState(0);


useEffect(() => {
    console.log("renderira se");
    setCounter(() => count + 1);
    setDoubled(() => count * 2);
    setSquared(() => count * count);    
}, [count]);






    return ( 
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <p>Doubled: {count * 2}</p>
            <p>Squared: {count * count}</p>
            <h1>UseEffect:</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <p>Plus 1 = {counter}</p>
            <p> Doubled = {doubled}</p>
            <p>Squared = {squared}</p>
        </div>
     );
}
 
export default UseEffectHook;



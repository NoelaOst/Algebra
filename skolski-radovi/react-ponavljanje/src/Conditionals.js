//u JSX se ne može pisati if kondicional, umjesto njega se koristi trenary kondicional
import { useState } from "react";

const Conditionals = () => {
const [isToggled, setIsToggled] = useState(false);
const [isNoela, setIsNoela] = useState("Luka");

// const change = () => {
// // if (isNoela === "Luka") {
// //     setIsNoela("Noela"); 
// // }
// // else setIsNoela("Luka");
// // isNoela === "Luka" ? setIsNoela("Noela") : setIsNoela("Luka");
// }


    return ( 
        <>

{/* Ovaj način sa treu/false vrijednostima je renderiranje (često komponente) ili podataka  */}
        <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
        {/* Ovdje nam je varijabla u usestate BOOLEAN, dakle ili je true ili je false, u kodu ispod, govorimo ako je prva varijabla true prikaži "toggled" */}
        {isToggled && <p>Toggled</p>}
        {/* Druga opcija je klasični trenary s upitnikom: */}
        {isToggled ? <p>Toggled</p> : null}

{/* Ovo je toggle između dva STRINGA */}
        <button onClick={() => isNoela === "Luka" ? setIsNoela("Noela") : setIsNoela("Luka")}>Toggle Name</button>
        <p>{isNoela}</p>
        

        </>
     );
}
 
export default Conditionals;
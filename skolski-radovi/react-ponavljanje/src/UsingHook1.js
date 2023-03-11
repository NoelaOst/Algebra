import { useState } from "react";

export default function UsingHook1 (){
    const [name, setName] = useState("Mario");
    const [age, setAge] = useState(22);
    const [city, setCity] = useState("Zagreb");
    const [korisnici, setKorisnici] = useState([
        { id: 1, ime: 'Pero', prezime: 'Perić', godine: 33},
        { id: 2, ime: 'Vitomir', prezime: 'Ogonol', godine: 56},
        { id: 3, ime: 'Karolina', prezime: 'Baluk', godine: 11},
        { id: 4, ime: 'Tomislava', prezime: 'Org', godine: 26}
    ]);


const handleClick = () => {
    setName ("Dario");
    setAge(29);
    setCity("Split");
        
    }

return(
        <div>
            <h1>{name} is {age}. He comes from {city}</h1>
            <button onClick={handleClick}>Click me to change name</button>
    

            {/* to render list of objects we need to map thru it first */}
            <ol>  {korisnici.map((korisnik) => {
                return (
                    <li> {korisnik.ime} </li>
                )
            })}
            </ol>
          
        </div>
    )
}


import { useState } from "react";

export default function UsingMap () {
    const kristali = [
        {vrsta: "ametist", težina: 1, karat: 3},
        {vrsta: "turmalin", težina: 2, karat: 8},
        {vrsta: "peridot", težina: 4, karat: 7},
    ]

    const dijamanti = ["bijeli ", "champagne ", "zeleni"];
    
    const zlato = ["bijelo zlato ", "žuto zlato ", "crveno/rozo zlato"];

    const [animals, setAnimals] = useState(
        [{ime: "Zebra", vrsta: "sisavac", stanište: "savana"},
        {ime: "Lav", vrsta: "sisavac", stanište: "savana"},
        {ime: "Hobotnica", vrsta: "sisavac", stanište: "more"},
        {ime: "Komodo zmaj", vrsta: "gmaz", stanište: "plaža/tropi"},
    ]);

    const handleClickButton = () => setAnimals(
        [
            {ime: "Žirafa", vrsta: "sisavac", stanište: "savana"},
            {ime: "Pantera", vrsta: "sisavac", stanište: "savana"},
            {ime: "Tuna", vrsta: "riba", stanište: "more"},
            {ime: "Anakonda", vrsta: "gmaz", stanište: "džungla"},
        ]);
 


    return (
        <div>
            <h1>Vrste kristala</h1>
            <ol>
                {kristali.map((kristal) => <li>{kristal.vrsta} ima {kristal.karat} karata</li>)}
            </ol>
            <h1>Vrste dijamanata</h1>
            <ol>
                {dijamanti.map((dijamant) => <li>{dijamant} dijamant</li>)}
            </ol>
            <h1>Boje zlata</h1>
            <ol>
                {zlato.map((materijal) => <li>{materijal}</li>)}
            </ol>
            <h1> Vrste i značajke životinja</h1>
            <ol> {animals.map((animal) => <li>{`${animal.ime} je ${animal.vrsta} čije stanište je ${animal.stanište}`}</li>)} 
            </ol>
            <button onClick={handleClickButton}>Click to change animal once</button>
            

        </div>

    )
}
export default function UsingMap () {
    const kristali = [
        {vrsta: "ametist", težina: 1, karat: 3},
        {vrsta: "turmalin", težina: 2, karat: 8},
        {vrsta: "peridot", težina: 4, karat: 7},
    ]

    const dijamanti = ["bijeli ", "champagne ", "zeleni"];


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
        </div>

    )
}
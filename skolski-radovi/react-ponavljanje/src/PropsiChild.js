const PropsiChild = ({imena, naslov, godina}) => {
    const prezimena = imena.map(prez => prez.preizme);
    return ( 
        <div>
            <p>{imena.map((ime) => ime.preizme).join(" ")}</p>
            <p>{godina}</p>
            <p>{prezimena}</p>
            <ol> {imena.map((osoba) => <li>{osoba.ime}</li>)}</ol>


        </div>
     );
}

 
export default PropsiChild;

//možemo uzeti cijeli objekt i staviti ga kao prop željenog imena, a onda ga direktno mapirati u child komponenti u returnu i iz njega izvadititi željeni atribut, pr, 1 i 4.
//druga opcija je da ih odma mapiramo dok određujemo propse u parent komponenti a u child ih samo navedemo kao argument i odma koristimo u returnu, pr.2
//treća opcije je da konstruiramo novu varijablu u child komponenti, nazovemo ju kako želimo i unutar nje mapiramo arrey, i onda ponovno koristimo gotovu varijablu u returnu, pr 3.

//opcija 2

// const PropsiChild = (props) => {
//     const preizme = props.preizme;
//     const godina = props.godina;


//     const prezimena = imena.map(prez => prez.preizme);
//     return ( 
//         <div>
//             <p>{imena.map((ime) => ime.preizme).join(" ")}</p>
//             <p>{godina.join(",")}</p>
//             <p>{prezimena}</p>
//             <ol> {imena.map((osoba) => <li>{osoba.ime}</li>)}</ol>


//         </div>
//      );
// }
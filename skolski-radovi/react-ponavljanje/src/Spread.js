import SpreadChild from "./SpreadChild";
const Spread = () => {
    const lista = [
        {ime: "Noelaa", preizme:"OStriccc", godina:27},
        {ime: "Noaaa", preizme:"Oriccc", godina:67},
        {ime: "Nolaaaa", preizme:"Otriccccc", godina:57},
        {ime: "Lelaaaa", preizme:"Tricccc", godina:77}
    ]
    return ( 
        <>
        <h1>Spread operator</h1>
        {lista.map(atribut => <SpreadChild {...atribut}/>)}
        </>
     );
}
 
export default Spread;

//ovaj način je  malo drugačiji s obzirom da map iterira kroz arrey objekata i svaki put ponovno stvara child komponentu dok god ima objekata u arreyu
//u child komponenti u argument samo navedemo sve atribute kao što smo i u inicijalnom arreyu, te ih korisitmo kakvi jesu
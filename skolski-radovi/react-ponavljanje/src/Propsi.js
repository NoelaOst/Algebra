import PropsiChild from "./PropsiChild";


const Propsi = () => {

    const imena = [
        {ime: "Noela", preizme:"OStric", godina:27},
        {ime: "Noa", preizme:"Oric", godina:67},
        {ime: "Nola", preizme:"Otric", godina:57},
        {ime: "Lela", preizme:"Tric", godina:77}
    ]

    

    return (
        <div>
            <h2>Propsi:</h2>
            <PropsiChild imena={imena} naslov="Lista imena" godina={imena.map((ime) => ime.godina) }/>
        </div>
      );
}
 
export default Propsi;


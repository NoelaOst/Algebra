const SpreadChild = ({ime, preizme, godina}) => {

    return ( 
    <>
    <h3>{ime} {preizme} ima {godina} godina</h3>
    </> 
    );
}
 
export default SpreadChild;

//druga opcija 
// const SpreadChild = (props) => {

//     return ( 
//     <>
//     <h3>{props.ime} {props.preizme} ima {props.godina} godina</h3>
//     </> 
//     );
// }
 
// export default SpreadChild;
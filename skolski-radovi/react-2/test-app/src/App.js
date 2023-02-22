import ShowText from "./COmponents/ShowText"
import ShowClassText from "./COmponents/ShowClassText"
import ArrowFunc from "./COmponents/ArrowFunc"
import "./main.css"

function App() {
  return ( 
  <div>
    <p className="plavo">
    <ShowText />
    <ShowClassText/>
    <ArrowFunc pozdrav="dobro jutro"/>
    </p>
  </div> 
  );
}

export default App;

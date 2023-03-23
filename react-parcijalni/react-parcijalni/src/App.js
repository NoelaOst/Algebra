import React from "react";
import { useState } from "react";
import Input from "./Input";
import SearchResult from "./SearchResult";

function App() {
  const [input, setInput] = useState("");

  const handleButton = (input) => {
    setInput(input);
  };

  return (
    <div>
      <Input handleButton={handleButton} />
      {input !== "" && <SearchResult input={input} />}
    </div>
  );
}

export default App;

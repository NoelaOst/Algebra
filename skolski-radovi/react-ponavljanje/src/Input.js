import { useState } from "react";

export default function Input() {
    const [message, setMessage] = useState("");
    const [sentMesssage, setSentMessage] = useState(message);


    return(
        <div>
            <input value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={() => setSentMessage(message)}>Send</button>
    
            <p>{sentMesssage}</p>
        </div>
    )
}

//napravi funkciju koja će izbrisati value svaki put kad je poslan i koja će svaki put kad se klikne poslati value u novi paragraf



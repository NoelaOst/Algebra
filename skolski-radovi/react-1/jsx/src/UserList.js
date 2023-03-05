import {useState} from "react";
import Users from "./Users";

export default function UserList() {

const [user, setUser] = useState( [
    {ime: "Noela",
    prezime: "Ostric",
godine: 25},
    {ime: "David",
    prezime: "Ostric",
godine: 35},
    {ime: "Mama",
    prezime: "Ostric",
godine: 55}
])

return (
    <div>
    <ul>{user.map((user, i) => <li key="i">{user}</li>)}</ul> 
    </div>
)
}

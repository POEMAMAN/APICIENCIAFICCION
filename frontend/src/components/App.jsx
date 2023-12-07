import { useEffect } from "react";
import { useState } from "react";
import ListDrinks from "./ListDrinks";
import "../css/app.css"
import Menu from "./Menu";
import { Route, Routes } from "react-router-dom";

function App() {

    //User State --> hook
    //Las variables de estado se deben dclarar siempre al principio, antes de las funciones
    const [drinks, setDrinks] = useState([]);
    let [searchDrink, setSearchDrinks] = useState("ron");

    useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchDrink}`)
    .then((response) => response.json())
    .then ((data) => {
        try{
        setDrinks(data.drinks)
        }
        catch{
        setDrinks("ron")
        }
        
    })
    },
    [searchDrink])//Este array hace que se ejecute el código una sola vez, sellama array de dependencia, al poner search drink le indico que rehaga el tech si cambia la variable

    // const elementsDrinks = drinks.map((drink) => <p key={drink.idDrink}>{drink.strDrink}</p>) //hay que poner siempre el Key al renderizar una lista con Map, se suele usar el Id al ser unico, sino se puede usar el indice del Map

    const handleDrinks = (event) => {
        setSearchDrinks(event.target.value)
        if (event.target.value === "") {
            setSearchDrinks("ron")
        }
    }

    return (
        <div>
            <Menu />
            <form>
                <input type="text" placeholder="dime la bebida" onChange={handleDrinks}/>
            </form>
            {/* este es un elemento que viene de la dependencia Router React */}
            <Routes>
                <Route path="/" element={<h1>UseEfect</h1>}/>{/*que quiero que renderice/> */} 
                <Route path="/list" element={<ListDrinks drinks={drinks}/>}/>
            </Routes>
            {/**/}
        </div>
    )
    }
    

export default App;

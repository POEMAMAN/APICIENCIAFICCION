import propTypes from "prop-types";
import Drink from "./ListDrinks/Drink";

function ListDrinks({ drinks }) {
    const elementLi = drinks.map((oneDrink) => {
        return (
        <li key={oneDrink.idDrink}>
            <Drink oneDrink={oneDrink} />
        </li>
        );
    });



    return (
        <ul>
        {elementLi}
        </ul>
    );
}

Drink.propTypes = {
    oneDrink: propTypes.object
}
ListDrinks.propTypes = {
    drinks: propTypes.array
}

export default ListDrinks
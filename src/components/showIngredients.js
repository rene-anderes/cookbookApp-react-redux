import React from "react";
import { useSelector } from "react-redux";

const ShowIngredients = () => {

    const ingredients = useSelector(state => state.ingredients );
    return (
        <table>
            <tbody>
            {ingredients.map((ingredient, index) => (
                <tr key={index}>
                    <td className="recipe-ingredient">{ ingredient.portion }</td>
                    <td>&nbsp;&nbsp;</td>
                    <td className="recipe-ingredient">{ ingredient.description }&nbsp;&nbsp;{ ingredient.comment}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default ShowIngredients;

import { useSelector, useDispatch } from "react-redux";
import ShowIngredients from "./showIngredients";
import { fetchIngredients } from "../redux/ActionCreator";
import { ShowTags } from "./showTags";

export const ShowDetail = () => {
    
    const dispatch = useDispatch(); 
    const recipe = useSelector(state => state.recipe.data);
    
    if (recipe.uuid) {
      dispatch(fetchIngredients(recipe._links))
      return(
        <ShowRecipe recipe={recipe}/>
      )
    } else {
      return(<p className="w3-container w3-margin-left ra-lcars-text-yellow">Loading...</p>);
    }
};

let ShowRecipe = ({recipe}) => {
  const addingDate = new Date(recipe.addingDate);
  const editingDate = new Date(recipe.editingDate)
  return (
    <div className="w3-container w3-margin-left w3-animate-opacity">
      <div className="recipe-title">{ recipe.title }</div>
      <div className="recipe-preamble" dangerouslySetInnerHTML={{__html: recipe.preamble}}></div>
      <div className="recipe-portion">Zutaten für <span id="noofperson">{ recipe.noOfPerson }</span> Personen</div>
      <ShowIngredients></ShowIngredients>
      <div>&nbsp;</div>
      <div className="recipe-prepare">Zubereitung</div>
      <div className="recipe-preparation" dangerouslySetInnerHTML={{__html: recipe.preparation}}></div>
      <div>&nbsp;</div>
      <div className="recipe-rating">Rating <span id="rating">{ recipe.rating }</span></div>
      <div className="recipe-adding">Erfasst: <span id="adding">{ addingDate.toLocaleDateString() }</span></div>
      <div className="recipe-update">Aktualisiert: <span id="update">{ editingDate.toLocaleDateString() }</span></div>
      <ShowTags>{ recipe.tags }</ShowTags>
      <p>&nbsp;</p>
    </div>
  );

};

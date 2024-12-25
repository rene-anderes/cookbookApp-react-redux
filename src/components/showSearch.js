import { useSelector, useDispatch } from "react-redux";
import { searchRecipes } from "../redux/ActionCreator"

export const ShowSearch = () => {
    const dispatch = useDispatch();

    return(
        <div className="w3-container w3-margin-left w3-animate-opacity">
            <p className="ra-lcars-text-red w3-large" style={{textTransform: "uppercase"}}>Rezeptsuche</p>
            <input type="text" onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            let text = e.target.value
                            console.log(text);
                            dispatch(searchRecipes(text));
                        }
                    }}
                    placeholder='Type to search'/>
        </div>
    );

}
import { useSelector, useDispatch } from "react-redux";
import { searchRecipes } from "../redux/ActionCreator"
import ShowSearchResult from "./showSearchResult";

export const ShowSearch = () => {
    const dispatch = useDispatch();

    return(
        <div>
        <div className="w3-container w3-margin-left w3-animate-opacity">
            <p className="ra-lcars-text-red w3-large" style={{textTransform: "uppercase"}}>Rezeptsuche</p>
            <input class="w3-input w3-border-0" type="text" onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            let text = e.target.value
                            dispatch(searchRecipes(text));
                        }
                    }}
                    placeholder='Type to search'/>
        </div>
        <ShowSearchResult/>
        </div>
    );

}
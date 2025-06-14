import { useSelector, useDispatch } from "react-redux";
import { searchRecipes } from "../redux/ActionCreator"
import { setSearchText } from "../redux/searchTextSlice";
import ShowSearchResult from "./showSearchResult";
import { Link } from "react-router-dom";
import { basePath } from "../index";

export const ShowSearch = () => {
    const dispatch = useDispatch();
    const { searchText } = useSelector(state => ({
        searchText: state.searchText.text
    }));
    const piPath = basePath + "/pi";
    return(
        <div className="w3-container w3-margin-left w3-animate-opacity">
            
                <div className="ra-search-title">Rezeptsuche</div>
                <input type="text" className="ra-search-input" value={searchText} 
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                dispatch(searchRecipes(e.target.value));
                            }
                        }}
                        onChange={(e) => {
                            dispatch(setSearchText(e.target.value));
                        }}
                        placeholder='Suchbegriff eingeben... mit Taste Enter wird die Suche gestartet'/>
            
            <ShowSearchResult/>
            <div className="ra-pi"><Link to={piPath}>&pi;</Link></div>
        </div>
    );

}
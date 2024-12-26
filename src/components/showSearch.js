import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchRecipes } from "../redux/ActionCreator"
import ShowSearchResult from "./showSearchResult";

export const ShowSearch = () => {
    const dispatch = useDispatch();
    const { searchText } = useSelector(state => ({
        searchText: state.searchResult.searchText
    }));
    console.debug({searchText})
    return(
        <div>
        <div className="w3-container w3-margin-left w3-animate-opacity">
            <p className="ra-lcars-text-red w3-large" style={{textTransform: "uppercase"}}>Rezeptsuche</p>
            <input type="text" className="ra-search-input" onKeyDown={(e) => {
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
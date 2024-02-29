import React from "react";
import { useSelector } from "react-redux";

export const ShowTags = () => {

    const tags = useSelector(state => state.recipe.data.tags );
    return (
        <div className="recipe-tags">Stichworte:&nbsp;
            {tags.map((tag, index) => (
                <span className="w3-badge ra-lcars-color-grey" key={index} style={{marginLeft: "4px"}}>{tag}</span>
            ))}        
        </div>
    )
};


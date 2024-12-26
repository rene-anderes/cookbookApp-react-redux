import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetail } from "../redux/ActionCreator"
import { basePath } from "../index";

let ListItem = ({item}) => {
  const dispatch = useDispatch();
  const recipeLink = basePath + "/" + item.uuid;
  return (
    <div class="ra-search-result-item ra-lcars-text-yellow">
        <Link to={recipeLink} onClick={() => dispatch(fetchDetail(item.links))}>{item.title}</Link>
    </div>
  );
};

const ShowSearchResult = () => {
  
  const { data } = useSelector(state => ({
    data: state.searchResult.data
  }));
   
  return (
    <div className="w3-container w3-margin-left w3-animate-opacity ra-lcars-text-yellow">
      <div className="w3-margin-top">
          {data?.map((item, index) => (
            <div key={index}>
              <ListItem item={item}/>
            </div>
          ))}
          <div>&nbsp;</div>
      </div>

    </div>
  );
};


export default ShowSearchResult;
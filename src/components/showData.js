import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, fetchDetail, nextPage, previousPage } from "../redux/ActionCreator"

let ListItem = ({item}) => {
  const dispatch = useDispatch();
  const recipeLink = "/cookbookApp/" + item.uuid;
  return(
    <Link to={recipeLink} className="selection" onClick={() => dispatch(fetchDetail(item.links))}>{item.title}</Link>
  );
};

const ShowData = () => {

  const dispatch = useDispatch(); 
  const { data } = useSelector(state => ({
    data: state.recipeList.data
  }));
  const { pageable } = useSelector(state => ({
    pageable: state.pageable.data
  }));

  useEffect(() => {
    dispatch(fetchData())
  }, []);
 
  return (
    <div className="ra-lcars-text-yellow">
      <div className="w3-margin-top" style={{width: "22em", maxWidth: "22em"}}>
          {data?.map((item, index) => (
            <div key={index}>
              <ListItem item={item}/>
            </div>
          ))}
          <div>&nbsp;</div>

          <div className="w3-margin-top w3-center w3-animate-opacity">
              <button className="navigation-prev w3-center" disabled={pageable?.first} title="previous" onClick={() => dispatch(previousPage())}>previous</button>
              <button className="navigation-next w3-center" disabled={pageable?.last} title="next" onClick={() => dispatch(nextPage())}>next</button>
          </div>

      </div>

    </div>
  );
};


export default ShowData;
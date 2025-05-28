import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetail } from "../redux/ActionCreator"
import { basePath } from "../index";

let ListItem = ({item}) => {
  const dispatch = useDispatch();
  const recipeLink = basePath + "/" + item.uuid;
  return (
    <div className="ra-search-result-item">
        <Link to={recipeLink} onClick={() => dispatch(fetchDetail(item.links))}>{item.title}</Link>
    </div>
  );
};

const ShowSearchResult = () => {
  
  const { data } = useSelector(state => ({
    data: state.searchResult.data
  }));
   
  return (
    <div className="w3-animate-opacity">
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
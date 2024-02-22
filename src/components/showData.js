import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, fetchDetail, nextPage, previousPage } from "../redux/ActionCreator"

const ShowData = () => {

  const dispatch = useDispatch(); 
  const { data, pagable } = useSelector(state => ({
    data: state.data,
    pagable: state.pagable,
  }));

  useEffect(() => {
    dispatch(fetchData())
  }, []);
 
  return (
    <div className="w3-cell ra-lcars-text-yellow">
      <div className="w3-margin-top" style={{width: "22em", maxWidth: "22em"}}>
          {data?.map((item, index) => (
            <div key={index}>
              <button className="selection w3-large" onClick={() => dispatch(fetchDetail(item.links))}>{item.title}</button>
            </div>
          ))}
          <div>&nbsp;</div>

          <div className="w3-margin-top w3-center">
              <button className="navigation-prev w3-center" disabled={pagable?.first} title="previous" onClick={() => dispatch(previousPage())}>previous</button>
              <button className="navigation-next w3-center" disabled={pagable?.last} title="next" onClick={() => dispatch(nextPage())}>next</button>
          </div>

      </div>

    </div>
  );
};


export default ShowData;
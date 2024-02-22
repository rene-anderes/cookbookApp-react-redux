import ShowData from "./showData";

const Navigation = () => {
    return (
    
        <div className="w3-col" style={{width: "30em"}}>
          <div className="w3-cell-row">
                <div className="w3-cell ra-lcars-top">
                    <div className="ra-lcars-color-grey ra-lcars-line-bold" style={{width: "3em"}}>&nbsp;</div>
                </div>
                <div className="w3-cell ra-lcars-horizontal-spacer"></div>
                <div className="w3-cell ra-lcars-top">
                    <div className="ra-lcars-color-yellow ra-lcars-line-bold" style={{width: "16.6em"}}>&nbsp;</div>
                </div>
                <div className="w3-cell ra-lcars-top-right-corner ra-lcars-color-lightblue w3-right">
                    <div className="ra-lcars-top-right-corner-inside"></div>
                </div>
          </div>
          <div className="ra-lcars-vertical-spacer"></div>
          <div className="w3-cell-row" style={{height: "40em"}}>
            
                <div className="w3-cell w3-margin-top ra-lcars-text-yellow ra-lcars-top">
                    <ShowData/> 
                </div>
                 
                <div className="w3-cell ra-lcars-line-right w3-right" style={{height: "40em"}}>
                    <div className="ra-lcars-color-grey" style={{height: "12em"}}>&nbsp;</div>
                    <div className="ra-lcars-vertical-spacer"></div>
                    <div className="ra-lcars-color-red" style={{height: "7em"}}>&nbsp;</div>
                    <div className="ra-lcars-vertical-spacer"></div>
                    <div className="ra-lcars-color-lavender" style={{height: "20.6em"}}>&nbsp;</div>
                </div>
          </div>
          <div className="ra-lcars-vertical-spacer"></div>
          <div className="w3-cell-row">
                <div className="w3-cell ra-lcars-bottom">
                    <div className="ra-lcars-color-yellow ra-lcars-line-thin" style={{width: "5em"}}>&nbsp;</div>
                </div>
                <div className="w3-cell ra-lcars-horizontal-spacer"></div>
                <div className="w3-cell ra-lcars-bottom">
                    <div className="ra-lcars-color-red ra-lcars-line-thin" style={{width: "10em"}}>&nbsp;</div>
                </div>
                <div className="w3-cell ra-lcars-horizontal-spacer"></div>
                <div className="w3-cell ra-lcars-bottom">
                    <div className="ra-lcars-color-lavender ra-lcars-line-thin" style={{width: "8.4em"}}>&nbsp;</div>
                </div>
                 <div className="w3-cell ra-lcars-horizontal-spacer"></div>
                <div className="w3-cell ra-lcars-bottom-right-corner ra-lcars-color-grey w3-right">
                    <div className="ra-lcars-bottom-right-corner-inside"></div>
                </div>
          </div>
        </div>
    
    )
}

export default Navigation;
import ShowDetail from "./showDetail";
import reactIcon from "../images/React-icon.svg";
import reduxIcon from "../images/Redux-icon.svg";
import packageJson from "../../package.json";
import { useSelector } from "react-redux";
import { ShowAppInfo } from "./showAppInfo";

const Content = () => {
    const version = packageJson.version;
    const recipe = useSelector(state => state.detail);
    let showDetail = false;
    if (recipe?.uuid) {
        showDetail = true;
    }

    return (
        
        <div className="w3-rest" style={{height: "100%"}}>
            <div className="w3-container">
                <div className="w3-cell-row">
                    <div className="w3-cell ra-lcars-top-left-corner ra-lcars-color-lavender">
                        <div className="ra-lcars-top-left-corner-inside"></div>
                    </div>
                    <div className="w3-cell ra-lcars-horizontal-spacer"></div>
                    <div className="w3-cell ra-lcars-top" style={{width: "5%"}}>
                        <div className="ra-lcars-color-yellow ra-lcars-line-bold">&nbsp;</div>
                    </div>
                    <div className="w3-cell ra-lcars-horizontal-spacer"></div>
                    <div className="w3-cell ra-lcars-top">
                        <div className="ra-lcars-color-lightblue ra-lcars-line-bold">&nbsp;</div>
                    </div>
                    <div className="w3-cell ra-lcars-horizontal-spacer"></div>
                    <div className="w3-cell ra-lcars-top" style={{width: "2em"}}>
                        <div className="ra-lcars-color-grey ra-lcars-line-bold">&nbsp;</div>
                    </div>
                    <div className="w3-cell ra-lcars-horizontal-spacer"></div>
                    <div className="w3-cell ra-lcars-top">
                        <div className="ra-lcars-color-red ra-lcars-line-bold ra-lcars-line-end-left">&nbsp;</div>
                    </div>
                </div>
                <div className="ra-lcars-vertical-spacer"></div>
                <div className="w3-cell-row" style={{height: "80vh"}}>
                    <div className="w3-cell ra-lcars-line-left ra-lcars-color-red" style={{height: "100%"}}>
                        <div className="ra-lcars-color-red w3-right-align" style={{minHeight: "10em"}}><span className="ra-lcars-code">67-1229</span></div> 
                        <div className="ra-lcars-vertical-spacer"></div>
                        <div className="ra-lcars-color-yellow w3-right-align" style={{height: "40%", maxHeight: "75%", minHeight: "12em"}}><span className="ra-lcars-code">056-A3</span></div>
                        <div className="ra-lcars-vertical-spacer"></div>
                        <div className="ra-lcars-color-grey w3-right-align" style={{height: "20%", maxHeight: "30%", minHeight: "10em"}}><span className="ra-lcars-code">V-{version}</span><div className="w3-center"><img style={{marginTop: "0.5em"}} width={"28px"} alt="React" src={reactIcon}/><br/><img width={"28px"} alt="Redux" style={{marginTop: "0.5em"}} src={reduxIcon}/></div></div>
                        <div className="ra-lcars-vertical-spacer"></div>
                    </div>
                    <div className="w3-cell">
                        <div className="w3-container w3-margin-left ra-lcars-text-yellow" style={{maxWidth: "800px"}}>
                            { showDetail && <ShowDetail/>}
                            { !showDetail &&
                                <div className="w3-container w3-margin-left ra-lcars-text-yellow">
                                    <span>Wähle ein Rezept aus der Liste aus ...</span>
                                    <p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                    <ShowAppInfo/>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="ra-lcars-vertical-spacer"></div>
                <div className="w3-cell-row">
                    <div className="w3-cell ra-lcars-bottom-left-corner ra-lcars-color-yellow">
                        <div className="ra-lcars-bottom-left-corner-inside"></div>
                    </div>
                    <div className="w3-cell ra-lcars-horizontal-spacer"></div>
                    <div className="w3-cell ra-lcars-bottom">
                        <div className="ra-lcars-color-grey ra-lcars-line-thin ">&nbsp;</div>
                    </div>
                    <div className="w3-cell ra-lcars-horizontal-spacer"></div>
                    <div className="w3-cell ra-lcars-bottom" style={{width: "5%"}}>
                        <div className="ra-lcars-color-lavender ra-lcars-line-thin">&nbsp;</div>
                    </div>
                    <div className="w3-cell ra-lcars-horizontal-spacer"></div>
                    <div className="w3-cell ra-lcars-bottom">
                        <div className="ra-lcars-color-red ra-lcars-line-thin">&nbsp;</div>
                    </div>
                    <div className="w3-cell ra-lcars-horizontal-spacer"></div>
                    <div className="w3-cell ra-lcars-bottom" style={{width: "2em"}}>
                        <div className="ra-lcars-color-yellow ra-lcars-line-thin">&nbsp;</div>
                    </div>
                    <div className="w3-cell ra-lcars-horizontal-spacer"></div>
                    <div className="w3-cell ra-lcars-bottom">
                        <div className="ra-lcars-color-lightblue ra-lcars-line-thin ra-lcars-line-end-left">&nbsp;</div>
                    </div>
                </div>
                <div>&nbsp;</div>
            </div>
         </div>
    );
}

export default Content;